import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { z } from "zod";
import { revalidateTag } from "next/cache";
import { getBlogLikeModel } from "@/lib/blog-likes";
import { hashIp } from "@/lib/visitors";

export const runtime = "nodejs";

const likeQuerySchema = z.object({
  slug: z.string().min(1, "Slug is required"),
});

const likeMutationSchema = z.object({
  slug: z.string().min(1, "Slug is required"),
});

async function getClientIp() {
  const headerStore = await headers();
  const forwardedFor = headerStore.get("x-forwarded-for");
  const realIp = headerStore.get("x-real-ip");

  return forwardedFor?.split(",")[0]?.trim() ?? realIp ?? "unknown";
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const parsed = likeQuerySchema.safeParse({
    slug: searchParams.get("slug"),
  });

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Missing or invalid blog slug" },
      { status: 400 },
    );
  }

  const BlogLike = await getBlogLikeModel();
  const count = await BlogLike.countDocuments({ slug: parsed.data.slug });

  return NextResponse.json({ count });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = likeMutationSchema.parse(body);
    const BlogLike = await getBlogLikeModel();
    const ip = await getClientIp();
    const visitorHash = hashIp(ip);

    try {
      await BlogLike.create({
        slug: parsed.slug,
        visitorHash,
        firstSeen: new Date(),
      });
    } catch (error) {
      const maybeMongoError = error as { code?: number } | null | undefined;

      if (maybeMongoError?.code !== 11000) {
        throw error;
      }
    }

    revalidateTag("blog-like-counts", "default");

    const count = await BlogLike.countDocuments({ slug: parsed.slug });

    return NextResponse.json({ count });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 },
      );
    }

    console.error("Blog like error:", error);
    return NextResponse.json(
      { error: "Failed to update blog like" },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { revalidateTag } from "next/cache";
import { getVisitorCount, getVisitorModel, hashIp } from "@/lib/visitors";

export const runtime = "nodejs";

async function getClientIp() {
  const headerStore = await headers();
  const forwardedFor = headerStore.get("x-forwarded-for");
  const realIp = headerStore.get("x-real-ip");
  const ip = forwardedFor?.split(",")[0]?.trim() ?? realIp ?? "unknown";

  return ip;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  if (searchParams.get("mode") !== "count") {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const count = await getVisitorCount();
  return NextResponse.json({ count });
}

export async function POST() {
  const ip = await getClientIp();
  const hash = hashIp(ip);
  const Visitor = await getVisitorModel();
  const result = await Visitor.updateOne(
    { hash },
    { $setOnInsert: { hash, firstSeen: new Date() } },
    { upsert: true },
  );

  if (result.upsertedCount > 0) {
    revalidateTag("visitor-count", "default");
  }

  const count = await Visitor.countDocuments();
  return NextResponse.json({ count });
}

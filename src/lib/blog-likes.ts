import mongoose, { model, models, Schema } from "mongoose";
import { unstable_cache } from "next/cache";
import connectMongoose from "@/lib/mongoose";

const blogLikeSchema = new Schema(
  {
    slug: { type: String, required: true },
    visitorHash: { type: String, required: true },
    firstSeen: { type: Date, default: Date.now },
  },
  { versionKey: false },
);

blogLikeSchema.index({ slug: 1, visitorHash: 1 }, { unique: true });

let indexPromise: Promise<unknown> | null = null;

export async function getBlogLikeModel() {
  await connectMongoose;

  const existingModel = models.BlogLike;

  if (existingModel && !("visitorHash" in existingModel.schema.paths)) {
    mongoose.deleteModel("BlogLike");
  }

  const BlogLikeModel =
    models.BlogLike || model("BlogLike", blogLikeSchema, "blog_likes");

  if (!indexPromise) {
    indexPromise = (async () => {
      const existingIndexes = await BlogLikeModel.collection.indexes();
      const legacySlugIndex = existingIndexes.find(
        (index) =>
          index.name === "slug_1" &&
          index.unique === true &&
          index.key &&
          (index.key as Record<string, number>).slug === 1,
      );

      if (legacySlugIndex) {
        await BlogLikeModel.collection.dropIndex("slug_1");
      }

      await BlogLikeModel.createIndexes();
    })();
  }

  await indexPromise;
  return BlogLikeModel;
}

export const getBlogLikeCounts = unstable_cache(
  async (slugs: string[]) => {
    if (slugs.length === 0) {
      return {} as Record<string, number>;
    }

    const BlogLike = await getBlogLikeModel();
    const likes = await BlogLike.aggregate<{
      _id: string;
      count: number;
    }>([
      { $match: { slug: { $in: slugs } } },
      {
        $group: {
          _id: "$slug",
          count: { $sum: 1 },
        },
      },
    ]);

    return likes.reduce<Record<string, number>>((counts, like) => {
      counts[like._id] = like.count ?? 0;
      return counts;
    }, {});
  },
  ["blog-like-counts"],
  { revalidate: 300, tags: ["blog-like-counts"] },
);

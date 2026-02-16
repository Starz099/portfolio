import { createHash } from "crypto";
import { model, models, Schema } from "mongoose";
import { unstable_cache } from "next/cache";
import connectMongoose from "@/lib/mongoose";

const visitorSchema = new Schema(
  {
    hash: { type: String, required: true, unique: true },
    firstSeen: { type: Date, default: Date.now },
  },
  { versionKey: false },
);

const VisitorModel =
  models.UniqueVisitor ||
  model("UniqueVisitor", visitorSchema, "unique_visitors");

let indexPromise: Promise<unknown> | null = null;

export async function getVisitorModel() {
  await connectMongoose;

  if (!indexPromise) {
    indexPromise = VisitorModel.createIndexes();
  }

  await indexPromise;
  return VisitorModel;
}

export function hashIp(ip: string) {
  const salt = process.env.VISITOR_HASH_SALT ?? "default-salt";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

export const getVisitorCount = unstable_cache(
  async () => {
    const Visitor = await getVisitorModel();
    return Visitor.countDocuments();
  },
  ["visitor-count"],
  { revalidate: 300, tags: ["visitor-count"] },
);

import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not set");
}

declare global {
  var _mongooseConnection: Promise<typeof mongoose> | undefined;
}

const dbName = process.env.MONGODB_DB ?? "portfolio";

const connectPromise =
  global._mongooseConnection ?? mongoose.connect(uri, { dbName });

global._mongooseConnection = connectPromise;

export default connectPromise;

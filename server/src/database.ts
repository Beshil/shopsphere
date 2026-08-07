import mongoose from "mongoose";

export const connectDatabase = async (mongoUri: string | undefined) => {
  if (!mongoUri) {
    console.warn("MONGODB_URI is not set; starting without a database connection");
    return;
  }
  await mongoose.connect(mongoUri);
};

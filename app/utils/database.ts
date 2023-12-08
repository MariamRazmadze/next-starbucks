import mongoose from "mongoose";

let isConnected = false;
export const connectToDb = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDb already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: "starbucks",
    });
  } catch (error) {
    console.log(error);
  }
};

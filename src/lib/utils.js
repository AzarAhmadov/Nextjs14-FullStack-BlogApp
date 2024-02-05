import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    const connection = {};

    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error(error);
  }
};
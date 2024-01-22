const MONGO_URI = process.env.NEXT_PUBLIC_MONGO;

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error(error);
  }
};
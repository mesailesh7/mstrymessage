import mongoose from "mongoose";

type ConnectionObject = {
    // ? means optional it might come or not
    isConnected?: number;
};

const connection: ConnectionObject = {};

// database is always in different continent so might be delayed or not come so always use async

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("already connected to database");
        return
    }

    try {
        // there are many options during connection so please study what are the options and use case
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

        console.log(db)
        connection.isConnected = db.connections[0].readyState
        console.log(db.connections)

        console.log("DB connected successfully")

    } catch (error) {
        console.log("Database conenction failed", error)
        process.exit(1)
    }

}

export default dbConnect;

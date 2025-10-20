import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import routes from "./routes.js";

const app = express();

// Setup mongoose
    try {
        await mongoose.connect("mongodb://localhost:27017", {
            dbName: "furniture"
    });

    console.log("Successfully connected to DB!");
} catch(err) {
    console.error("Cannot connect to db!");
    console.error(err.nessage);
}

// Add cors
app.use(cors());

// Add json parser
app.use(express.json());

// Add routes
app.use(routes);

app.listen(3030, console.log("Server is listening on http://localhost:3030..."))
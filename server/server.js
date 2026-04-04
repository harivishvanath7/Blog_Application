import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();

const app = express();

// midlleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

app.get("/", (req, res) => {
    res.send("API is running..");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
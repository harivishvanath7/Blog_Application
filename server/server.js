import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

import blogRoutes from "./routes/blogRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import newsLetterRoutes from "./routes/newsLetterRoutes.js";

const app = express();

// midlleware
app.use(cors({
  origin: "https://haris-blogs-newsletter.vercel.app/",
  credentials: true
}));
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/newsletter", newsLetterRoutes);

app.get("/", (req, res) => {
  res.send("API is running..");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

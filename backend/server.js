const express = require("express");
const cors = require("cors");

// Importing routes
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req, res) => {
    res.send("Hello World..");
});

// Using the routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

const PORT = 5000;

app.listen(PORT, (req,res) => {
    console.log(`Server Running at PORT ${5000}...`);
});
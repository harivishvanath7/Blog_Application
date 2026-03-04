const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const { createPost, getPosts, getPost, updatePost, deletePost } = require('../controllers/postController');

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", protect, createPost);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;
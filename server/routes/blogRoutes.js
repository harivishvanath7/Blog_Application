import express from "express";

const router = express.Router();

import {
 createBlog,
 getBlogs,
 getBlogBySlug,
 updateBlog,
 deleteBlog,
 getBlogByID,
} from "../controllers/blogController.js";

import { protect } from "../middleware/authMiddleware.js";


router.post("/", protect, createBlog);
router.get("/", getBlogs);
router.get("/:slug", getBlogBySlug);
router.get("/id/:id", getBlogByID);
router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);

export default router;

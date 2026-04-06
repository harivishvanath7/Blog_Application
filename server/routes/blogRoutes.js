import express from "express";

const router = express.Router();

import {
 createBlog,
 getBlogs,
 getBlogBySlug,
 updateBlog,
 deleteBlog,
} from "../controllers/blogController.js";


router.post("/", createBlog);
router.get("/", getBlogs);
router.get("/:slug", getBlogBySlug);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;

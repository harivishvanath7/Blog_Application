import slugify from "slugify";
import Blog from "../models/Blog.js";
import { sendEmailToSubscribers } from "../utils/sendEmailToSubscribers.js";

const createBlog = async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    const slug = slugify(title, { lower: true, strict: true });

    const blog = await Blog.create({
      title,
      content,
      tags,
      slug,
    });

    // (after blog is created) - send mails
    try {
      await sendEmailToSubscribers(blog.title, blog.content, blog.slug);
    } catch (err) {
      console.log("Email failed:", err.message);
    }

    res.status(201).json(blog);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true }).sort({
      createdAt: -1,
    });

    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found." });
    }

    // increment views
    blog.views += 1;
    await blog.save();

    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    const updatedData = {
      title,
      content,
      tags,
    };

    if (title) {
      updatedData.slug = slugify(title, { lower: true, strict: true });
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
    });

    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog Deleted!!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createBlog, getBlogs, getBlogBySlug, updateBlog, deleteBlog };

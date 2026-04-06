import API from "../api/api.js";

// Get All Blogs
export const fetchBlogs = () => API.get("/blogs");

// Get Single Blog
export const fetchBlogBySlug = (slug) => API.get(`/blogs/${slug}`);

// Create blog
export const createBlog = (data) => API.post("/blogs", data);

// Update blog
export const updateBlog = (id, data) => API.put(`/blogs/${id}`, data);

// Delete blog
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);

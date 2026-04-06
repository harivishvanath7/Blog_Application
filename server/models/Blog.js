import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
        },
        tags: [
            {
                type: String,
            },
        ],
        slug: {
            type: String,
            unique: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: true
        },
    },
    { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
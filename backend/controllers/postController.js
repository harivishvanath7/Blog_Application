const Post = require("../models/Post");


const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;

        const post = await Post.create({
            title,
            content,
            author: req.user.id
        });

        res.json(post);

    } catch (error) {
        res.status(500).json({ message: "Server Error. "});
    }
};


const getPosts = async (req, res) => {
        const posts = await Post.find().populate("author", "username");

        res.json(posts);
};

const getPost = async (req, res) => {
    const post = await Post.findById(req.params.id).populate("author", "username");

    if(!post) {
        return res.json({ message: "Post not found" });
    }

    res.json(post);
};

const updatePost = async (req, res) => {
    const post = await Post.findById(req.params.id);

    if(!post) {
        return res.json({ message: "Post not found" });
    }

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    await post.save();

    res.json(post);
};

const deletePost = async (req, res) => {
    const post = await Post.findById(req.params.id);

    if(!post) {
        return res.json({ message: "Post not found" });
    }

    await post.deleteOne();

    res.json({ message: "Post Deleted" });
};

module.exports = { createPost, getPosts, getPost, updatePost, deletePost };
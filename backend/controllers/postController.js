const getPosts = (req, res) => {
    res.json({ message: "All blog posts"});
};

const createPost = (req, res) => {
    res.json({ message: "Post created"});
};

module.exports = { getPosts, createPost };


const registerUser = (req, res) => {
    res.json({ message: "User Registered."});
};

const loginUser = (req, res) => {
    res.json({ message: "User Logged in."});
};

module.exports = { registerUser, loginUser };


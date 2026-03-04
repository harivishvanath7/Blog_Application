const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.json({ message : "User Already Exists" });
        }

        // Password Hashing
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        res.json({
            message: "User registered successfully",
            user
        });
    } catch (error) {
        res.status(500).json( {message: "Server error"});
    }    
};



const loginUser = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(!user) {
        return res.json({ message: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
        return res.json({ message: "Invalid Password"});
    }

    // JWT Token creation
    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h"}
    );

    // Sending the token
    res.json({
        message: "Login succesful",
        token
    });
};



module.exports = { registerUser, loginUser };


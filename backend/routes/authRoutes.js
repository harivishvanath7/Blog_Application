const express = require('express');
const router = express.Router();

// Importing Controller functions
const {registerUser, loginUser} = require('../controllers/authController');

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;




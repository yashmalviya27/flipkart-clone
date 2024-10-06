const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/Usremodel'); 
const jwt = require('jsonwebtoken');

// Register Route
router.post('/register', async (req, res) => {
    const { userName, name, password } = req.body; 
    try {
        const hashPass = await bcrypt.hash(password, 10);
        const user = new User({
            userName,
            name,
            password: hashPass
        });
        await user.save();
        res.status(201).json({ message: 'User Registered Successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    try {
        const user = await User.findOne({ userName }); // Corrected variable name
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid Username or Password' });
        }
        const token = jwt.sign({ id: user._id }, 'Malviya', { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Export the router
module.exports = router;

const jwt = require("jsonwebtoken");
const User = require('../models/User');

/**
 * -------------------------------------
 * Generate JWT Token
 * -------------------------------------
 */

const generateToken = (user) => {
    return jwt.sign({
        id: user._id,
        role: user.role,
    },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d",
        }
    );
};

/**
 * -------------------------------------
 * Register Controller
 * -------------------------------------
 */

const register = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        // Create user
        const user = await User.create({
            name,
            email,
            password,
            role: role || "candidate",
        });

        const token = generateToken(user);

        res.status(201), json({
            success: true,
            message: "User registered successfully",
            token,
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

/**
 * -------------------------------------
 * Login Controller
 * -------------------------------------
 */

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Find user + include password
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.json(401).json({
                success: false,
                message: "Invalid credentials",
            });
        };

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        };

        const token = generateToken(user);

        res.status(200).json({
            success: true,
            message: "Login successfull",
            token,
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { register, login }
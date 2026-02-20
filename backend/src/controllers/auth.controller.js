const jwt = require("jsonwebtoken");
const User = require('../models/User');
require("dotenv").config();

/**
 * -------------------------------------
 * Generate JWT Token
 * -------------------------------------
 */

const sendTokenResponse = (user, statusCode, res, message) => {
    const token = jwt.sign(
        {
            id: user._id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d",
        }
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(statusCode).json({
        success: true,
        message,
    });
};

/**
 * -------------------------------------
 * Register Controller
 * -------------------------------------
 */

const register = async (req, res) => {
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

        sendTokenResponse(user, 201, res, "User registered successfully");
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

/**
 * -------------------------------------
 * Login Controller
 * -------------------------------------
 */

const login = async (req, res) => {
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

        if (user.isSuspended) {
            return res.status(403).json({
                status: false,
                message: "Account suspended",
            });
        };

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        };

        sendTokenResponse(user, 200, res, "Login successful");
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { register, login }
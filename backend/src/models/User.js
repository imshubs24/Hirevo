const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: 2,
        maxlength: 50,
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^\S+@\S+\.\S+$/,
            "Please provide a valid email address",
        ],
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6,
        select: false, // Do not return password by default
    },

    role: {
        type: String,
        enum: ["candidate", "recruiter", "admin"],
        default: "candidate",
    },

    isApproved: {
        type: Boolean,
        default: function () {
            // Candidates auto-approved
            return this.role === "candidate";
        },
        index: true,
    },

    isSuspended: { // Admin can suspend
        type: Boolean,
        default: false,
    },

    resume: {
        publicId: {
            type: String,
        },
        url: {
            type: String,
        },
    },

    profile: {
        skills: [
            {
                type: String,
                trim: true,
            },
        ],
        bio: {
            type: String,
            maxlength: 500,
        },
        experience: {
            type: Number,
            min: 0,
        },
    },

},
    {
        timestamps: true,
    });

/**
 * -------------------------------------
 * Password Hashing (Pre-Save Hook)
 * -------------------------------------
 */
userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

/**
 * -------------------------------------
 * Compare Password Method
 * -------------------------------------
 */
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
};

const User = mongoose.model("User", userSchema);
module.exports = User;
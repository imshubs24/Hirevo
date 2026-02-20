const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },

    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    resumeUrl: {
        type: String,
        required: true,
    },

    coverLetter: {
        type: String,
        maxlength: 1000,
    },

    status: {
        type: String,
        enum: ["applied", "reviewing", "shortlisted", "rejected", "hired"],
        default: "applied",
        index: true,
    },
},
    {
        timestamps: true,
    },
);

/**
 * ---------------------------------------
 * Prevent Duplicate Applications
 * ---------------------------------------
 */
applicationSchema.index(
    { job: 1, candidate: 1 },
    { unique: true }
);

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;
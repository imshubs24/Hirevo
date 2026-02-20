const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Job title is required"],
        trim: true,
    },

    description: {
        type: String,
        required: [true, "Job description is required"],
    },

    location: {
        type: String,
        trim: true,
    },

    salary: {
        type: Number,
    },

    type: {
        type: String,
        trim: true,
    },

    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    isActive: {
        type: Boolean,
        default: true,
    },

    applicationsCount: Number,

},
    {
        timestamps: true,
    }
);

// Useful Indexes
jobSchema.index({ title: 1 });
jobSchema.index({ location: 1 });

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
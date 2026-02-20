const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Company name is required"],
        trim: true,
    },

    description: {
        type: String,
        trim: true,
    },

    website: {
        type: String,
        trim: true,
    },

    location: {
        type: String,
        trim: true,
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
},
    {
        timestamps: true,
    }
);

// Index for faster lookup
companySchema.index({ name: 1 });

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
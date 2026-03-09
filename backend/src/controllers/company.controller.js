const Company = require("../models/Company");

const createCompany = async (req, res) => {
    try {
        const { name, website, location, description } = req.body;

        const company = await Company.create({
            name,
            website,
            location,
            description,
            createdBy: req.user._id,
        });

        res.status(201).json(company);
    } catch (error) {
        return res.status(500).json({
            message: "Failed to create company",
        });
    }
};

const getCompanies = async (req, res) => {
    try {
        const companies = await Company.find({
            createdBy: req.user._id,
        });

        res.status(200).json(companies);
    } catch (error) {
        return res.status(500).json({
            message: "Failed to fetch companies",
        });
    }
};

const getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);

        if (!company) {
            return res.status(404).json({
                message: "Company not found",
            });
        }

        res.status(200).json(company);
    } catch (error) {
        return res.status(500).json({
            message: "Failed to fetch company",
        });
    }
};

const updateCompany = async (req, res) => {
    try {
        const company = await Company.findOneAndUpdate(
            {
                _id: req.params.id,
                createdBy: req.user._id
            },
            req.body,
            { new: true }
        );

        if (!company) {
            return res.status(404).json({
                message: "Company not found"
            });
        }

        res.status(200).json(company);

    } catch (error) {
        return res.status(500).json({
            message: "Failed to update company"
        });
    }
};

const deleteCompany = async (req, res) => {
    try {
        const company = await Company.findOneAndDelete({
            _id: req.params.id,
            createdBy: req.user._id
        });

        if (!company) {
            return res.status(404).json({
                message: "Company not found"
            });
        }

        res.status(200).json({
            message: "Company deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Failed to delete company"
        });
    }
};

module.exports = { createCompany, getCompanies, getCompanyById, updateCompany, deleteCompany };
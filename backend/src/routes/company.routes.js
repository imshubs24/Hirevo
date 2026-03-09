const express = require("express");
const protect = require("../middlewares/auth.middleware.js");
const authorize = require("../middlewares/role.middleware.js");
const { createCompany, getCompanies, getCompanyById, updateCompany, deleteCompany } = require("../controllers/company.controller.js")

const router = express.Router();

router.post("/", protect, authorize("recruiter"), createCompany);

router.get("/", protect, authorize("recruiter"), getCompanies);

router.get("/:id", protect, authorize("recruiter"), getCompanyById);

router.patch("/:id", protect, authorize("recruiter"), updateCompany);

router.delete("/:id", protect, authorize("recruiter"), deleteCompany);

module.exports = router;
const express = require("express");
const { register, login, getCurrentUser, logoutUser } = require('../controllers/auth.controller');
const protect = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logoutUser);
router.get('/me', protect, getCurrentUser);

module.exports = router;
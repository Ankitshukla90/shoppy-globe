const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Simple async handler wrapper
const asyncHandler = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

router.post('/register', asyncHandler(registerUser));
router.post('/login', asyncHandler(loginUser));

module.exports = router;
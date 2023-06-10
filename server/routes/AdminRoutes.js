const express = require('express');
const router = express();
const adminController = require('../controllers/AdminController');

// Signup route
router.post('/signup', adminController.signup);

// Login route
router.post('/login', adminController.login);

module.exports = router;

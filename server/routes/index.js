const express = require('express');
const router = express.Router();

// Import route files
const sampleRoutes = require('./sampleRoutes');

// Set up routes
router.use('/samples', sampleRoutes);

module.exports = router;

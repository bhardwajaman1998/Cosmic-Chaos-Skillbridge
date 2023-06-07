const express = require('express');
const router = express.Router();

// Import the corresponding controller for sample routes
const sampleController = require('../controllers/SampleController');

// Define routes
router.get('/', sampleController.getAllSamples);
router.post('/', sampleController.createSample);
router.get('/:id', sampleController.getSampleById);
router.put('/:id', sampleController.updateSample);
router.delete('/:id', sampleController.deleteSample);

module.exports = router;

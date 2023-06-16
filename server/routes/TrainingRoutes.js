const express = require('express');
const router = express();
const trainingController = require('../controllers/TrainingController');

// Get all traineings
router.get('/get_all_trainings', trainingController.getAllTrainings);

// Get training by id
router.post('/get_training', trainingController.getTraining);

// Add training
router.post('/add_training', trainingController.addTraining);

module.exports = router;

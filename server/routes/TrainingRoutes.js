const express = require('express');
const router = express();
const trainingController = require('../controllers/TrainingController');
const authenticateToken = require('../middleware/JwtValidate');

// Get all traineings
router.get('/get_all_trainings', authenticateToken, trainingController.getAllTrainings);

// Get training by id
router.post('/get_training', authenticateToken, trainingController.getTraining);

// Add training
router.post('/add_training', authenticateToken, trainingController.addTraining);

module.exports = router;

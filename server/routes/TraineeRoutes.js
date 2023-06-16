const express = require('express');
const router = express();
const traineeController = require('../controllers/TraineeController');

// Get all trainees
router.get('/get_all_trainees', traineeController.getAll);

// Get trainee by id
router.post('/get_trainee', traineeController.getTrainee);

// Add trainee
router.post('/add_trainee', traineeController.addTrainee);

//Assign Mentor
router.post('/assign_mentor', traineeController.assignMentor);

//Assign training
router.post('/assign_training', traineeController.assignTraining);

module.exports = router;

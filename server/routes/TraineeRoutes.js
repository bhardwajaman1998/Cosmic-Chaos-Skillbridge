const express = require('express');
const router = express();
const traineeController = require('../controllers/TraineeController');

// Get all trainees
router.get('/get_all_trainees', traineeController.getAll);

// Get trainee by id
router.get('/get_trainee/:traineeId', traineeController.getTrainee);

// Get trainee by course id
router.get('/trainees/course/:courseId', traineeController.getTraineesByCourseId);

// Add trainee
router.post('/add_trainee', traineeController.addTrainee);

//Assign Mentor
router.post('/assign_mentor', traineeController.assignMentor);

//Assign training
router.post('/assign_training', traineeController.assignTraining);

// get Assigned Courses by traineeId
router.get('/trainees/:traineeId/courses', traineeController.getAssignedCourses);

module.exports = router;

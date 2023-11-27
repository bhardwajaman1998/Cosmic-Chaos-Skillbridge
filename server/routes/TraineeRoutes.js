const express = require('express');
const router = express();
const traineeController = require('../controllers/TraineeController');
const authenticateToken = require('../middleware/JwtValidate');

// Get all trainees
router.get('/get_all_trainees', authenticateToken, traineeController.getAll);

// Get trainee by id
router.get('/get_trainee/:traineeId', authenticateToken, traineeController.getTrainee);

// Get trainee by course id
router.get('/trainees/course/:courseId', authenticateToken, traineeController.getTraineesByCourseId);

// Add trainee
router.post('/add_trainee', authenticateToken, traineeController.addTrainee);

//Assign Mentor
router.post('/assign_mentor', authenticateToken, traineeController.assignMentor);

//Assign training
router.post('/assign_training', authenticateToken, traineeController.assignTraining);

//Assign score and report
router.post('/assign_score_report', authenticateToken, traineeController.assignScoreReport);

// get Assigned Courses by traineeId
router.get('/trainees/:traineeId/courses', authenticateToken, traineeController.getAssignedCourses);

module.exports = router;

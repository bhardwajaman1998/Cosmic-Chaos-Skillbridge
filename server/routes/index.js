const express = require('express');
const router = express.Router();

// Import other route files
const adminRoutes = require('./AdminRoutes');
const traineeRoutes = require('./TraineeRoutes')
const trainingRoutes = require('./TrainingRoutes')
const courseRoutes = require('./CourseRoutes')
const quizRoutes = require('./QuizRoutes')
const quizResultRoutes = require('./QuizResultRoutes')

// Register routes from other files
router.use('/admin', adminRoutes);
router.use('/trainee', traineeRoutes);
router.use('/training', trainingRoutes);
router.use('/course', courseRoutes);
router.use('/quiz', quizRoutes);
router.use('/quiz_result', quizResultRoutes);

// Use additional routes as needed
module.exports = router;

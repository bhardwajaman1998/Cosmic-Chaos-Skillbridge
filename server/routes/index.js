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
router.use('/api/admin', adminRoutes);
router.use('/api/trainee', traineeRoutes);
router.use('/api/training', trainingRoutes);
router.use('/api/course', courseRoutes);
router.use('/api/quiz', quizRoutes);
router.use('/api/quiz_result', quizResultRoutes);

// Use additional routes as needed
module.exports = router;

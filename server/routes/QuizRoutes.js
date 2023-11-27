const express = require('express');
const router = express();
const quizController = require('../controllers/QuizController');
const authenticateToken = require('../middleware/JwtValidate');

// Create Quiz
router.post('/create_quiz', authenticateToken, quizController.createQuiz);

//get quiz by id
router.get('/get_quiz', authenticateToken, quizController.getQuizById);

router.get('/get_quiz_courseId/:courseId', authenticateToken, quizController.getQuizByCourseId);

module.exports = router;

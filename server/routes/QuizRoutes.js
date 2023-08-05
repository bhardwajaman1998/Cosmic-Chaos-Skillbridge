const express = require('express');
const router = express();
const quizController = require('../controllers/QuizController');

// Create Quiz
router.post('/create_quiz', quizController.createQuiz);

//get quiz by id
router.get('/get_quiz', quizController.getQuizById);

router.get('/get_quiz_courseId/:courseId', quizController.getQuizByCourseId);

module.exports = router;

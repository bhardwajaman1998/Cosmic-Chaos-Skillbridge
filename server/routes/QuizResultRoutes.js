const express = require('express');
const router = express();
const quizResultController = require('../controllers/QuizResultController');

// Get Quiz Result
router.get('/get_quiz_result', quizResultController.getQuizResult);

module.exports = router;

const express = require('express');
const router = express();
const quizResultController = require('../controllers/QuizResultController');
const authenticateToken = require('../middleware/JwtValidate');

// Get Quiz Result
router.get('/get_quiz_result', authenticateToken, quizResultController.getQuizResult);

module.exports = router;

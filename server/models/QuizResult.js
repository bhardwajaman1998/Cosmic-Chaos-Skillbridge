const mongoose = require('mongoose');

const quizResultSchema = new mongoose.Schema({
  quiz_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz'
  },
  trainee_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainee'
  },
  answers: [String],
  score: Number
});

const QuizResult = mongoose.model('QuizResult', quizResultSchema);

module.exports = QuizResult;

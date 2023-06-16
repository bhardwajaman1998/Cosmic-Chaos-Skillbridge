const mongoose = require('mongoose');

const quizResultSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  quiz_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true
  },
  trainee_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainee',
    required: true
  },
  questions: [{
    question: {
      type: String,
      required: true
    },
    userAnswer: {
      type: String,
      required: true
    }
  }],
  score: {
    type: Number,
    required: true
  }
});

const QuizResult = mongoose.model('QuizResult', quizResultSchema, 'quiz_result', 'test');

module.exports = QuizResult;

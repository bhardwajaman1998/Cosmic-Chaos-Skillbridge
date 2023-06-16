const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  answer: {
    type: Number,
    required: true
  }
});

const QuizSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  questions: {
    type: [questionSchema],
    required: true
  },
  answers: {
    type: [Number]
  }
});

const Quiz = mongoose.model('Quiz', QuizSchema, 'quiz', 'test');
module.exports = Quiz;

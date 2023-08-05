const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
});

const Quiz = mongoose.model('Quiz', QuizSchema, 'quiz', 'test');
module.exports = Quiz;

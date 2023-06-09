const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  name: String,
  description: String,
  score: Number
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;

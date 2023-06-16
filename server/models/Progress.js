const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  trainee_id: mongoose.Schema.Types.ObjectId,
  training_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Training'
  },
  start_date: {
    type: Date,
    required: true
  },
  completion_date: Date,
  status: String,
  quiz_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz'
  }
});

const Progress = mongoose.model('Progress', progressSchema, 'progress', 'test');

module.exports = Progress;

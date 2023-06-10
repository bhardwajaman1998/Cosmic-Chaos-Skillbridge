const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
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

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;

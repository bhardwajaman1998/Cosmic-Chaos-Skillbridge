const mongoose = require('mongoose');

const traineeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  department_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DEPARTMENT',
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  assigned_training_programs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TRAINING'
  }],
  achievements: [{
    type: String
  }],
  progress: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PROGRESS'
  }],
  quiz_results: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QUIZ_RESULT'
  }],
  chart_data: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'trainee_chart_data'
  }]
});

const Trainee = mongoose.model('Trainee', traineeSchema);

module.exports = Trainee;

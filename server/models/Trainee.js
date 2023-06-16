const mongoose = require('mongoose');

const traineeSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  department_id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentor'
  },
  assigned_training_programs: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Training',
  },
  achievements: [{
    type: String,
  }],
  progress: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Progress',
  }],
  quiz_results: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QuizResult',
  }],
  chart_data: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ChartData',
  }],
});

const Trainee = mongoose.model('Trainee', traineeSchema, 'trainee', 'test');

module.exports = Trainee;

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  num_of_trainees: {
    type: Number,
    required: true
  },
  num_of_trainings: {
    type: Number,
    required: true
  },
  roles: {
    type: [String],
    required: true
  }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

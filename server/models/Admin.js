const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  num_of_trainees: {
    type: Number,
    required: false
  },
  num_of_trainings: {
    type: Number,
    required: false
  },
  roles: {
    type: [String],
    required: false
  }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

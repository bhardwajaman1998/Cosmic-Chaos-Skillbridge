const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  name: String,
  difficulty: String,
  time: String,
  description: String,
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;

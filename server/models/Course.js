const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

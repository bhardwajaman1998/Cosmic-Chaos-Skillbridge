const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  name: String,
  description: String
});

const Course = mongoose.model('Course', courseSchema, 'course', 'test');
module.exports = Course;

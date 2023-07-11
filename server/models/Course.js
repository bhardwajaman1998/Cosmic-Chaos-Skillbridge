const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  name: String,
  description: String,
  length: Number
});


const courseSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  name: String,
  lessons: {
    type: [lessonSchema],
    default: []
  }
});

const Course = mongoose.model('Course', courseSchema, 'course', 'test');
module.exports = Course;

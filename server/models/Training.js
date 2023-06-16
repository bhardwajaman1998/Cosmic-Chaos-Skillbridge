const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  name: String,
  description: String,
  course: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  num_of_course: Number,
  quiz_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz'
  }
});

const Training = mongoose.model('Training', trainingSchema, 'training', 'test');
module.exports = Training;

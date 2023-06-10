const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
  name: String,
  description: String,
  modules: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module'
  }],
  num_of_modules: Number,
  quiz_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz'
  }
});

const Training = mongoose.model('Training', trainingSchema);

module.exports = Training;

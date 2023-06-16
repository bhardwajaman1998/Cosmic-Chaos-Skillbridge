const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    name: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
  });
  
  const Mentor = mongoose.model('Mentor', mentorSchema, 'mentor', 'test');
  module.exports = Mentor;

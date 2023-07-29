  const mongoose = require('mongoose');

  const assignedTrainingProgramSchema = new mongoose.Schema({
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    course_name: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['In progress', 'Completed', 'Not Started'],
      required: true
    },
    start_date: {
      type: Date,
      required: false
    },
    deadline: {
      type: Date,
      required: true
    },
    end_date: {
      type: Date,
      required: false
    },
    evaluation: {
      type: Number,
      enum: [0, 1]
    },
    score: {
      type: Number,
      min: 0,
      max: 100
    },
    quiz_answer: {
      type: String,
      required: false
    },
    report: {
      type: String,
      required: false
    },
    lessons: {
      total: {
        type: Number,
        required: true
      },
      completed: {
        type: Number,
        required: true
      }
    }
  });


  const traineeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    assigned_training_programs: [assignedTrainingProgramSchema],
    photo: String,
    email: String,
    phone_number: String,
    mentor: String,
    department: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      name: String
    }
  });

  const Trainee = mongoose.model('Trainee', traineeSchema, 'trainee', 'test');

  module.exports = Trainee;

const mongoose = require('mongoose');

const traineeChartDataSchema = new mongoose.Schema({
  trainee_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainee'
  },
  module_name: String,
  completion_status: String,
  start_date: {
    type: Date,
    required: true
  },
  completion_date: Date,
  duration: Number
});

const TraineeChartData = mongoose.model('TraineeChartData', traineeChartDataSchema);

module.exports = TraineeChartData;

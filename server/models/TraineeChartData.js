const mongoose = require('mongoose');

const traineeChartDataSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
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

const TraineeChartData = mongoose.model('TraineeChartData', traineeChartDataSchema, 'trainee_chart_data', 'test');

module.exports = TraineeChartData;

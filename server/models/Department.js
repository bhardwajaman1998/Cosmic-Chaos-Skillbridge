const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  name: String
});

const Department = mongoose.model('Department', departmentSchema, 'department', 'test');
module.exports = Department;

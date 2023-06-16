const trainee = require('../models/Trainee');
const training = require('../models/Training');
// Controller methods for trainee routes
const getAll = async (req, res) => {
  try {
    const data = await trainee.find();
    console.log(data)
    res.json(data);
  } catch (error) {
    console.error('Error fetching trainees:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const addTrainee = async (req, res) => {
  try {
    const { name, photo, department_id, email, phone_number, mentor, assigned_training_programs, achievements, progress, quiz_results, chart_data} = req.body;
    const trainee = new trainee({ name, photo, department_id, email, phone_number, mentor, assigned_training_programs, achievements, progress, quiz_results, chart_data});
    await trainee.save();
    res.json(trainee);
  } catch (error) {
    console.error('Error creating trainee:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const getTrainee = async (req, res) => {
  try {
    const traineeId = await trainee.findById(req.params.id);
    if (!traineeId) {
      return res.status(404).json({ error: 'trainee not found' });
    }
    res.json(traineeId);
  } catch (error) {
    console.error('Error fetching trainee by ID:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const assignMentor = async (req, res) => {
  try {
    const traineeId = req.params;
    const mentorId = req.body;
    if (!traineeId) {
      return res.status(404).json({ error: 'trainee not found' });
    }

    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ error: 'Mentor not found' });
    }

    trainee.mentor = mentorId;
    await trainee.save();

    res.json(traineeId);
  } catch (error) {
    console.error('Error assigning mentor to trainee:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const assignTraining = async (req, res) => {
  try {
    const { trainingId } = req.params;
    const { traineeId } = req.body;

    const training = await training.findById(trainingId);
    if (!training) {
      return res.status(404).json({ error: 'Training not found' });
    }

    const trainee = await Trainee.findById(traineeId);
    if (!trainee) {
      return res.status(404).json({ error: 'Trainee not found' });
    }

    trainee.assigned_training_programs = trainingId;
    await trainee.save();

    res.json(trainee);
  } catch (error) {
    console.error('Error assigning training to trainee:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


module.exports = {
    getAll,
    addTrainee,
    getTrainee,
    assignMentor,
    assignTraining
};

const Training = require('../models/Training');

// Controller methods for trainee routes
const getAllTrainings = async (req, res) => {
  try {
    const data = await Training.find();
    console.log(data)
    res.json(data);
  } catch (error) {
    console.error('Error fetching trainings:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const addTraining = async (req, res) => {
    try {
      const { name, description, course, num_of_course, quiz_id } = req.body;
      const training = new Training({ name, description, course, num_of_course, quiz_id });
      await training.save();
      res.json(training);
    } catch (error) {
      console.error('Error creating training:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  

const getTraining = async (req, res) => {
  try {
    const trainingId = await Training.findById(req.params.id);
    if (!trainingId) {
      return res.status(404).json({ error: 'training not found' });
    }
    res.json(trainingId);
  } catch (error) {
    console.error('Error fetching training by ID:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
    getAllTrainings,
    addTraining,
    getTraining
};

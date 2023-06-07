const Sample = require('../models/Sample');

// Controller methods for sample routes
const getAllSamples = async (req, res) => {
  try {
    const samples = await Sample.find();
    res.json(samples);
  } catch (error) {
    console.error('Error fetching samples:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const createSample = async (req, res) => {
  try {
    const { name } = req.body;
    const sample = new Sample({ name });
    await sample.save();
    res.json(sample);
  } catch (error) {
    console.error('Error creating sample:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const getSampleById = async (req, res) => {
  try {
    const sample = await Sample.findById(req.params.id);
    if (!sample) {
      return res.status(404).json({ error: 'Sample not found' });
    }
    res.json(sample);
  } catch (error) {
    console.error('Error fetching sample by ID:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const updateSample = async (req, res) => {
  try {
    const sample = await Sample.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    if (!sample) {
      return res.status(404).json({ error: 'Sample not found' });
    }
    res.json(sample);
  } catch (error) {
    console.error('Error updating sample:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteSample = async (req, res) => {
  try {
    const sample = await Sample.findByIdAndDelete(req.params.id);
    if (!sample) {
      return res.status(404).json({ error: 'Sample not found' });
    }
    res.json({ message: 'Sample deleted successfully' });
  } catch (error) {
    console.error('Error deleting sample:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getAllSamples,
  createSample,
  getSampleById,
  updateSample,
  deleteSample,
};

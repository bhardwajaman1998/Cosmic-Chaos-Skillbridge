const Quiz = require('../models/Quiz');

// Controller method to create a new quiz
const createQuiz = async (req, res) => {
  try {
    const { _id, name, description, score, questions } = req.body;
    
    // Create the new quiz document
    const newQuiz = new Quiz({
      _id,
      name,
      description,
      score,
      questions
    });

    // Save the new quiz to the database
    const createdQuiz = await newQuiz.save();

    res.status(201).json(createdQuiz);
  } catch (error) {
    console.error('Error creating quiz:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const getQuizById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the quiz by its ID
    const quiz = await Quiz.findById(id);

    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    res.json(quiz);
  } catch (error) {
    console.error('Error fetching quiz by ID:', error);
    res.status(500).json({ error: 'Server error' });
  }
};



module.exports = {
  createQuiz,
  getQuizById
};

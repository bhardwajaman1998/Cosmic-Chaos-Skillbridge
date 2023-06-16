const QuizResult = require('../models/QuizResult');

const getQuizResult = async (req, res) => {
  try {
    const quizResultId = req.params.id;
    const quizResult = await QuizResult.findById(quizResultId);
    
    if (!quizResult) {
      return res.status(404).json({ error: 'Quiz result not found' });
    }

    res.json(quizResult);
  } catch (error) {
    console.error('Error fetching quiz result:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getQuizResult
};

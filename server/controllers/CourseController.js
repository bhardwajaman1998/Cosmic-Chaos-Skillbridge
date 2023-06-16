const Course = require('../models/Course');

// Controller methods for Course routes
const getAllCourses = async (req, res) => {
  try {
    const data = await Course.find();
    console.log(data)
    res.json(data);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const createCourse = async (req, res) => {
  try {
    const { name, description } = req.body;
    const course = new Course({ name, description});
    await course.save();
    res.json(course);
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
    getAllCourses,
    createCourse
};

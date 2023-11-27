const express = require('express');
const router = express();
const courseController = require('../controllers/CourseController');
const authenticateToken = require('../middleware/JwtValidate');

// Get all course
router.get('/get_all_courses', authenticateToken, courseController.getAllCourses);

// create course
router.post('/create_course', authenticateToken, courseController.createCourse);

//get course by id
router.get('/get_course/:courseId', authenticateToken, courseController.getCourseById);

module.exports = router;

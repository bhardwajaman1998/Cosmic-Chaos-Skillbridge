const express = require('express');
const router = express();
const courseController = require('../controllers/CourseController');

// Get all course
router.get('/get_all_courses', courseController.getAllCourses);

// create course
router.post('/create_course', courseController.createCourse);

//get course by id
router.get('/get_course/:courseId', courseController.getCourseById);

module.exports = router;

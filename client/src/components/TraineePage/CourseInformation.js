import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { fetchAssignedCourses } from '../../services/DashboardService';

const CourseInformation = () => {
//   const { traineeId } = useParams();
const traineeId = '64a88da8a3983f20ee0505bf';
const [assignedCourses, setAssignedCourses] = useState([]);

useEffect(() => {
  const fetchCourses = async () => {
    try {
      const trainee = await fetchAssignedCourses(traineeId);
      if (trainee && trainee.assigned_training_programs) {
        setAssignedCourses(trainee.assigned_training_programs);
      }
    } catch (error) {
      console.error('Error fetching assigned courses:', error);
    }
  };

    fetchCourses();
  }, [traineeId]);

  return (
    <div>
      <h2>Assigned Courses for Trainee ID: {traineeId}</h2>
      {assignedCourses.length > 0 ? (
        <ul>
          {assignedCourses.map((course, index) => (
            <li key={index}>
              <p>Course ID: {course.course_id}</p>
              <p>Course Name: {course.course_name}</p>
              <p>Status: {course.status}</p>
              <p>Start Date: {course.start_date}</p>
              <p>Deadline: {course.deadline}</p>
              {/* Display other course details as needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No assigned courses found for Trainee ID: {traineeId}.</p>
      )}
    </div>
  );
};

export default CourseInformation;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAssignedCourses } from '../../services/DashboardService';

const CourseInformation = ({ assignedCourses, traineeId}) => {
  // const { traineeId } = useParams();
// const traineeId = '64a88a2ca3983f20ee0505bb';
// const match = useRouteMatch();
  // const { traineeId } = match.params;
// console.log(traineeId);
// const [assignedCourses, setAssignedCourses] = useState([]);

// useEffect(() => {
//   const fetchCourses = async () => {
//     try {
//       const courses = await fetchAssignedCourses(traineeId);
//       if (courses) {
//         setAssignedCourses(courses);
//       }
//     } catch (error) {
//       console.error('Error fetching assigned courses:', error);
//     }
//   };

//     fetchCourses();
//   }, [traineeId]);

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

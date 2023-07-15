import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAssignedCourses } from '../../services/DashboardService';

const CourseInformation = ({ assignedCourses, traineeId}) => {
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

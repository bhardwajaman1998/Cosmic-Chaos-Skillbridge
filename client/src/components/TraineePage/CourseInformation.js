import { ClassNames } from '@emotion/react';
import React from 'react';

const CourseInformation = ({ assignedCourses, traineeId }) => {
  // Calculate learning time for each course
  const calculateLearningTime = (startDate, deadline) => {
    const startDateObj = new Date(startDate);
    const deadlineObj = new Date(deadline);

    if (isNaN(startDateObj.getTime()) || isNaN(deadlineObj.getTime())) {
      return 'N/A';
    }

    const differenceInTime = deadlineObj.getTime() - startDateObj.getTime();
    const minutes = Math.ceil(differenceInTime / (1000 * 60));
    return minutes;
  };




  return (
    <div className='course-info'>
      <h2>Courses</h2>
      {assignedCourses.length > 0 ? (
        <table className='course-info-table' style={{ borderCollapse: 'seperate', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px',}}>Course Name</th>
              <th style={{ padding: '10px',}}>Learning Time</th>
              <th style={{ padding: '10px',}}>Progress</th>
              <th style={{ padding: '10px',}}>Score</th>
              <th style={{ padding: '10px'}}>Evaluation Status</th>
            </tr>
          </thead>
          <tbody>
            {assignedCourses.map((course, index) => {
              // Calculate progress percentage
              const progress = ((course.lessons.completed || 0) / (course.lessons.total || 1)) * 100;
              // Calculate learning time for the course
              const learningTime = calculateLearningTime(course.start_date, course.deadline);

              // Determine background color based on evaluation status
              const backgroundColor = course.evaluation === 1 ? ' #6AD38B' : 'black';
              const colorColor = course.evaluation === 1 ? ' black' : 'white';
              let evaluationStatus;
              if (course.evaluation === 1) {
                evaluationStatus = 'Completed';
              } else if (course.evaluation === 0 && course.status === 'Completed') {
                evaluationStatus = 'Pending';
              } else {
                evaluationStatus = 'Not Started';
              }

              return (
                <tr key={index} className='course-info-insights'>
                  <td>
                    <td style={{ padding: '10px',}}>{course.course_name}</td>
                  </td>
                  <td style={{ padding: '10px',}}>{learningTime} mins</td>
                  <td style={{ padding: '10px',}}>{progress.toFixed(2)}%</td>
                  <td style={{ padding: '10px',}}>
                    {course.score !== undefined ? course.score : '-'}
                  </td>
                  <td>
                    <td className='course-info-eval' style={{ color: colorColor , padding: '10px', background: backgroundColor}} >
                      {/* {course.evaluation === 1 ? 'Completed' : 'Pending'} */}
                      {evaluationStatus}
                    </td>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No assigned courses found for Trainee ID: {traineeId}.</p>
      )}
    </div>
  );
};

export default CourseInformation;

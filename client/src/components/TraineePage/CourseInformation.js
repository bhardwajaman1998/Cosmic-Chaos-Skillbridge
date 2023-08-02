
import React from 'react';
import { Link } from 'react-router-dom';

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

  // const handleRedirection = (courseId, evaluationStatus) => {
  //   console.log(evaluationStatus)
  //   if (evaluationStatus === 'Pending') {
  //     <Link to='/trainees/traineePage/feedback' state={{ traineeId: traineeId, courseId: courseId}}></Link>
  //   }
  // };


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
              const backgroundColor = course.evaluation === 1 ? ' #6AD38B' : '#1F2D37';
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
                    <td style={{ padding: '10px',}}><span class="bold-span">{course.course_name}</span></td>
                  </td>
                  <td className="learn-time" style={{ padding: '10px',}}><span class="bold-span">{learningTime} mins</span></td>
                  <td className="course-progress"style={{ padding: '10px',}}><span class="bold-span">{progress.toFixed(2)}%</span></td>
                  <td className="course-score" style={{ padding: '10px',}}>
                    <span class="bold-span">{course.score !== undefined ? course.score : '-'}</span>
                  </td>
                  <td>
                    <td className='course-info-eval' style={{ color: colorColor , padding: '10px', background: backgroundColor}} >
                      {/* {course.evaluation === 1 ? 'Completed' : 'Pending'} */}
                      {evaluationStatus === 'Pending' ? 
                      (<Link to='/trainees/traineePage/feedback' state={{ traineeId: traineeId, courseId: course.course_id}}>{evaluationStatus}</Link>) :
                      (<span>{evaluationStatus}</span>)}
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

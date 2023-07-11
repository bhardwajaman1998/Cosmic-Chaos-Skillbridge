import React, { useEffect, useState } from 'react';

const TraineeList = () => {
  const [trainees, setTrainees] = useState([]);
  const calculateLearningTime = () => {
    // Calculate total learning time based on completed courses
    const totalLearningTime = trainees.courses.reduce((accumulator, course) => {
      return accumulator + course.duration;
    }, 0);

    // Convert learning time to hours and minutes
    const hours = Math.floor(totalLearningTime / 60);
    const minutes = totalLearningTime % 60;

    // Return formatted learning time
    return `${hours} hours ${minutes} minutes`;
  };

  return (
    <div>
      <h1>Trainee List</h1>
      <ul>
        {trainees.map(trainee => (
          <li key={trainee.id}>
            <img src={trainee.photo} alt={trainee.name} />
            <div>
              <p>{trainee.name}</p>
              <p>Learning Time: {calculateLearningTime()}</p>
              <p>Number of Courses: {trainee.courses.length}</p>
              <p>Completion: {trainee.completion}%</p>
              <p>Score: {trainee.score}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TraineeList;

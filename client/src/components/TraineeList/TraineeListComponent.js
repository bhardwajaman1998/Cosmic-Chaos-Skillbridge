import React, { useEffect, useState } from 'react';

const TraineeListComponent = ({traineesData}) => {
  // const [trainees, setTrainees] = useState([]);

  return (
    <div>
      <h1>Trainee List</h1>
      <ul>
        {traineesData.map(trainee => (
          <li key={trainee.id}>
            <img src={trainee.photo} alt={trainee.name} />
            <div>
              <p>{trainee.name}</p>
              {/* <p>Learning Time: {calculateLearningTime()}</p>
              <p>Number of Courses: {trainee.courses.length}</p>
              <p>Completion: {trainee.completion}%</p>
              <p>Score: {trainee.score}</p> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TraineeListComponent;

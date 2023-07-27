import React, { useEffect, useState } from 'react';
import TraineeListSection from './TraineeListSection';
import logo from '../../assets/avatar.png';
const TraineeListComponent = ({traineesData}) => {


  const empListData = traineesData.map((trainee) => {
    // Find the assigned training program for the selected course        
    
    return {
      name: trainee.name,
      imageUrl: logo,
      // courses:trainee.assigned_training_programs.length,
      // learningTime:calculateLearningTime(),
      // completion:trainee.completion,
      // Score: getFinalScore(),
      // courseStatus: trainee.completion
    };
  });

  // const [trainees, setTrainees] = useState([]);
  const calculateLearningTime = (startDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const differenceInMilliseconds = now - start;
    const minutes = Math.floor(differenceInMilliseconds / 60000);
  
    if (minutes > 350) {
      const hours = Math.floor(minutes / 60);
      if (hours > 70) {
        const days = Math.floor(hours / 24);
        return days + " days";
      }
      return hours + " hours";
    }
  
    return minutes + " minutes";
  };
  const getFinalScore = (selectedCourseProgram) => {
    if (selectedCourseProgram.status === "Completed") {
      if (selectedCourseProgram.evaluation === 0) {
        return "Pending";
      } else {
        return selectedCourseProgram.score || "-";
      }
    } else {
      return "-";
    }
  };

  return (
    <div>
    
      <table>
  <thead>
  <th></th>
    <th>Employee</th>
    <th>Learning Time</th>
    <th>Courses</th>
    <th>Completion</th>
    <th>Score</th>
    <th></th>
  </thead>
  <tbody>
  {empListData.map((item, index) => (
                    <TraineeListSection
                      key={index}
                      index={index}
                      name={item.name}
                      imageUrl={item.imageUrl}
                      // learningTime={item.learningTime}
                      // courses={item.courses}
                      // completion={item.completion}
                      // finalScore={item.finalScore}
                      
                    />
                  ))}
      </tbody>
      </table>
    </div>
  );
};
export default TraineeListComponent;

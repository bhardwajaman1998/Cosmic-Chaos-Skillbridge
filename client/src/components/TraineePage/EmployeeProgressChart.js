import React, { useEffect, useState } from 'react';
import DoughnutChart from '../DataVisualize/DoughnutChart'; // Update the import path with the correct path to your custom component
import ChartLabel from '../DataVisualize/ChartLabel';

const EmployeeProgressChart = ({ assignedCourses, traineeId }) => {
  const [completedCount, setCompletedCount] = useState(0);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [notStartedCount, setNotStartedCount] = useState(0);

  useEffect(() => {
    const calculateCourseCounts = () => {
      let completed = 0;
      let inProgress = 0;
      let notStarted = 0;

      assignedCourses.forEach((course) => {
        if (course.status === 'Completed') {
          completed++;
        } else if (course.status === 'In progress') {
          inProgress++;
        } else if (course.status === 'Not Started') {
          notStarted++;
        }
      });

      setCompletedCount(completed);
      setInProgressCount(inProgress);
      setNotStartedCount(notStarted);
    };

    calculateCourseCounts();
  }, [assignedCourses]);

  return (
   
        <div className='single-doughnut-container'>
          <DoughnutChart
            inProgressCount={inProgressCount}
            completedCount={completedCount}
            notStartedCount={notStartedCount}
          />
          <ChartLabel />
        </div>
  );
};

export default EmployeeProgressChart;
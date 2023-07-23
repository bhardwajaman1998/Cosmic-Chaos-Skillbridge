import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

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

  const data = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        data: [completedCount, inProgressCount, notStartedCount],
        backgroundColor: ['rgba(106, 211, 139, 1)', 'black', 'rgba(188, 188, 188, 1)'],
        hoverBackgroundColor: ['rgba(106, 211, 139, 1)', 'black', 'rgba(188, 188, 188, 1)'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            if (label) {
              const value = context.raw || 0;
              return `${label}: ${value}`;
            }
            return null;
          },
        },
      },
    },
  };

  return (
    <div>
      {/* <h2>Employee Progress Chart - Trainee ID: {traineeId}</h2> */}
      <div style={{ width: '500px' }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default EmployeeProgressChart;

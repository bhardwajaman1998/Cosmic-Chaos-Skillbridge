import React, { useEffect, useState } from 'react';
// import DoughnutChart from '../DataVisualize/DoughnutChart';
import ProgressSection from '../DataVisualize/ProgressSection';
// import ChartLabel from '../DataVisualize/ChartLabel';
// import EmployeeProgressChart from './EmployeeProgressChart';

const TraineeDataVisual = ({ traineeData }) => {
  const [averageCompletionRate, setAverageCompletionRate] = useState(0);
  const [averageLearningTime, setAverageLearningTime] = useState(0);
  const [coursesInProgress, setCoursesInProgress] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);

  // const chartRef = useRef(null);



  useEffect(() => {
    const calculateCoursesInProgress = () => {
      const inProgressCourses = traineeData.assigned_training_programs.filter(
        (program) => program.status === 'In progress'
      );
      setCoursesInProgress(inProgressCourses);
    };
  
    const calculateCompletedCourses = () => {
      const completedCourses = traineeData.assigned_training_programs.filter(
        (program) => program.status === 'Completed' && program.evaluation === 1
      );
      setCompletedCourses(completedCourses);
    };
    calculateCoursesInProgress();
    calculateCompletedCourses();
  }, [traineeData]);

  useEffect(() => {
    const calculateAverageLearningTime = () => {
      let totalTime = 0;
      let completedCount = 0;

      completedCourses.forEach((course) => {
        const startDate = new Date(course.start_date);
        const endDate = new Date(course.end_date);
        const differenceInMilliseconds = endDate - startDate;
        const minutes = Math.floor(differenceInMilliseconds / 60000);
        totalTime += minutes;
        completedCount++;
      });

      const averageTime = completedCount > 0 ? Math.floor(totalTime / completedCount) : 0;
      setAverageLearningTime(averageTime);
    };

    const calculateAverageCompletionRate = () => {
      const completedCount = completedCourses.length;
      const totalCount = completedCourses.length + coursesInProgress.length;

      const averageRate = totalCount > 0 ? Math.floor((completedCount / totalCount) * 100) : 0;
      setAverageCompletionRate(averageRate);
    };

    calculateAverageLearningTime();
    calculateAverageCompletionRate();
  }, [completedCourses, coursesInProgress]);

  // const data = {
  //   labels: ['In Progress', 'Completed'],
  //   datasets: [
  //     {
  //       data: [coursesInProgress.length, completedCourses.length],
  //       backgroundColor: ['black', 'rgba(106, 211, 139, 1)'],
  //       hoverBackgroundColor: ['black', 'rgba(106, 211, 139, 1)'],
  //     },
  //   ],
  // };

  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       display: false,
  //     },
  //     tooltip: {
  //       enabled: true,
  //       callbacks: {
  //         label: (context) => {
  //           const label = context.label || '';
  //           if (label) {
  //             const value = context.raw || 0;
  //             return `${label}: ${value}`;
  //           }
  //           return null;
  //         },
  //       },
  //     },
  //   },
  // };

  return (
    <div className="single-trainee-container">  
      <div className="progress-section">
        <ProgressSection index={0} title="Avg. completion rate" dataString={`${averageCompletionRate}%`} />
        <ProgressSection index={1} title="Avg. learning time" dataString={`${averageLearningTime} min`} />
      </div>
    </div>
  );
};

export default TraineeDataVisual;

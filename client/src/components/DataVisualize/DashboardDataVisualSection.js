import React, { useEffect, useState, useRef } from 'react';
import DoughnutChart from './DoughnutChart'
import ProgressSection from './ProgressSection'
import ChartLabel from './ChartLabel'

const DashboardDataVisualSection = ({ selectedCourse, traineesData }) => {
    const [averageCompletionRate, setAverageCompletionRate] = useState(0);
    const [averageLearningTime, setAverageLearningTime] = useState(0);
    const [employeesEnrolled, setEmployeesEnrolled] = useState(0);
    const [averageScore, setAverageScore] = useState(0);
  
    const inProgressCount = traineesData.filter(
      (trainee) =>
        trainee.assigned_training_programs.some(
          (program) => program.status === 'In progress' && program.course_id === selectedCourse._id
        )
    ).length;
  
    const completedCount = traineesData.filter(
      (trainee) =>
        trainee.assigned_training_programs.some(
          (program) => program.status === 'Completed' && program.course_id === selectedCourse._id
        )
    ).length;
  
    const notStartedCount = traineesData.filter(
      (trainee) =>
        trainee.assigned_training_programs.some(
          (program) => program.status === 'Not Started' && program.course_id === selectedCourse._id
        )
    ).length;
  
    const chartRef = useRef(null);
  
    useEffect(() => {
      const chartInstance = chartRef.current?.chartInstance;
  
      // Destroy the previous chart instance before unmounting
      return () => {
        if (chartInstance) {
          chartInstance.destroy();
        }
      };
    }, [selectedCourse]);
  
    useEffect(() => {
      const calculateAverageLearningTime = () => {
        let totalTime = 0;
        let completedCount = 0;
  
        traineesData.forEach((trainee) => {
          trainee.assigned_training_programs.forEach((program) => {
            if (
              program.course_id === selectedCourse._id &&
              program.status === 'Completed' &&
              program.evaluation === 1
            ) {
              const startDate = new Date(program.start_date);
              const endDate = new Date(program.end_date);
              const differenceInMilliseconds = endDate - startDate;
              const minutes = Math.floor(differenceInMilliseconds / 60000);
              totalTime += minutes;
              completedCount++;
            }
          });
        });
  
        const averageTime = completedCount > 0 ? Math.floor(totalTime / completedCount) : 0;
        const hours = Math.floor(averageTime / 60);
        const minutes = averageTime % 60;
        if (hours > 30) {
          const days = Math.floor(hours / 24);
          setAverageLearningTime(`${days} d`);
        } else if (minutes > 120) {
          setAverageLearningTime(`${hours} h`);
        } else {
          setAverageLearningTime(`${minutes} m`);
        }
      };
  
      const calculateAverageCompletionRate = () => {
        let completedCount = 0;
        let totalCount = 0;
  
        traineesData.forEach((trainee) => {
          trainee.assigned_training_programs.forEach((program) => {
            if (
              program.course_id === selectedCourse._id &&
              program.status === 'Completed' &&
              program.evaluation === 1
            ) {
              completedCount++;
            }
            if (program.course_id === selectedCourse._id) {
              totalCount++;
            }
          });
        });
  
        const averageRate = totalCount > 0 ? Math.floor((completedCount / totalCount) * 100) : 0;
        setAverageCompletionRate(averageRate);
      };
  
      const calculateEmployeesEnrolled = () => {
        let enrolledCount = 0;
  
        traineesData.forEach((trainee) => {
          trainee.assigned_training_programs.forEach((program) => {
            if (program.course_id === selectedCourse._id) {
              enrolledCount++;
            }
          });
        });
  
        setEmployeesEnrolled(enrolledCount);
      };
  
      const calculateAverageScore = () => {
        let totalScore = 0;
        let completedCount = 0;
  
        traineesData.forEach((trainee) => {
          trainee.assigned_training_programs.forEach((program) => {
            if (
              program.course_id === selectedCourse._id &&
              program.status === 'Completed' &&
              program.evaluation === 1
            ) {
              totalScore += program.score;
              completedCount++;
            }
          });
        });
  
        const averageScore = completedCount > 0 ? Math.floor(totalScore / completedCount) : 0;
        setAverageScore(averageScore);
      };
  
      calculateAverageLearningTime();
      calculateAverageCompletionRate();
      calculateEmployeesEnrolled();
      calculateAverageScore();
    }, [selectedCourse, traineesData]);
  
    // const formattedLearningTime = () => {
    //   console.log(averageLearningTime)
    //   const hours = Math.floor(averageLearningTime / 60);
    //   const minutes = averageLearningTime % 60;
    //   if (hours > 30) {
    //     const days = Math.floor(hours / 24);
    //     return `${days} days`;
    //   } else if (minutes > 120) {
    //     return `${hours} hours`;
    //   } else {
    //     return `${minutes} minutes`;
    //   }
    // }


    return (
      <div className='analytics-right'>
        <div className='chart-container'>
          <h3 className='chart-title'>Learning progress</h3>
          <div className='chart-section'>
            <DoughnutChart
              ref={chartRef}
              inProgressCount={inProgressCount}
              completedCount={completedCount}
              notStartedCount={notStartedCount}
            />
            <ChartLabel />
          </div>
        </div>
        <div className='progress-section-dashboard'>
          <ProgressSection index={0} title='Avg. completion rate' dataString={`${averageCompletionRate}%`} />
          <ProgressSection index={1} title='Avg. learning time' dataString={averageLearningTime} />
          <ProgressSection index={2} title='Employees enrolled' dataString={`${employeesEnrolled}`} />
          <ProgressSection index={3} title='Avg. score' dataString={`${averageScore}`} />
        </div>
      </div>
    );
  };
  
  export default DashboardDataVisualSection;
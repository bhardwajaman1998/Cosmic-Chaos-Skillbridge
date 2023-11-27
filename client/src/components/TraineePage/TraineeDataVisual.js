import React, { useEffect, useState } from 'react';
// import DoughnutChart from '../DataVisualize/DoughnutChart';
import ProgressSection from '../DataVisualize/ProgressSection';

// import ChartLabel from '../DataVisualize/ChartLabel';
import EmployeeProgressChart from './EmployeeProgressChart';
import { Bar } from 'react-chartjs-2';
import { fetchTraineeByID } from '../../services/DashboardService';
import { useNavigate } from 'react-router-dom';

const TraineeDataVisual = ({ traineeData }) => {
  const navigate = useNavigate();
  const [averageCompletionRate, setAverageCompletionRate] = useState(0);
  const [averageLearningTime, setAverageLearningTime] = useState(0);
  const [coursesInProgress, setCoursesInProgress] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [progressData, setProgressData] = useState([]);
  const [totalCourses, setTotalCourses] = useState(0);
  const [averageTotalScore, setAverageTotalScore] = useState(0);


  const [selectedTrainee, setSelectedTrainee] = useState(null);
  const [assignedPrograms, setAssignedPrograms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (traineeData._id) {
          const traineeDataById = await fetchTraineeByID(traineeData._id);
          setSelectedTrainee(traineeDataById);
          setAssignedPrograms(traineeDataById.assigned_training_programs);
        }
      } catch (error) {
        const parsedError = JSON.parse(error.message);
        if (parsedError && parsedError.code === 403) {
          localStorage.removeItem('token');
          window.alert('Session timed out'); // Display the alert message
          navigate('/');
        } else {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [traineeData]);


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
  
  const calculateProgressData = () => {
    const completedAndEvaluatedCourses = traineeData.assigned_training_programs.filter(
      (program) => program.status === 'Completed' && program.evaluation === 1
    );
  
    const progressData = completedAndEvaluatedCourses.map((program) => {
      return program.score || 0; // Use the "score" field or set to 0 if not available
    });
    setProgressData(progressData);
  };
  
  const calculateAverageLearningTime = () => {
      let totalTime = 0;
      let completedCount = 0;

      completedCourses.forEach((course) => {
        const startDate = new Date(course.start_date);
        const endDate = new Date(course.end_date);
        const differenceInMilliseconds = endDate - startDate;
        const minutes = Math.floor(differenceInMilliseconds / 60000) / 60 / 24;
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


  // const chartRef = useRef(null);
  useEffect(() => {
    if (traineeData) {
      setTotalCourses(traineeData.assigned_training_programs.length);
  
      const completedScores = completedCourses.map((program) => program.score || 0);
      const totalCompletedScores = completedScores.reduce((acc, score) => acc + score, 0);
      const averageScore = completedScores.length > 0 ? totalCompletedScores / completedScores.length : 0;
      setAverageTotalScore(averageScore);
  
      calculateCoursesInProgress();
      calculateCompletedCourses();
      calculateProgressData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [traineeData]); // Include traineeData in the dependency array
  
  // Second useEffect
  useEffect(() => {
    calculateAverageLearningTime();
    calculateAverageCompletionRate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completedCourses, coursesInProgress]);

  const data = {
    labels: completedCourses.map((program) => program.course_name),
    datasets: [
      {
        label: 'Score',
        data: progressData,
        backgroundColor: 'rgba(106, 211, 139, 1)',
        borderColor: 'rgba(106, 211, 139, 1)',
        borderWidth: 1,
        borderRadius: 5,
        maxBarThickness: 80,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            if (label) {
              const value = context.parsed.y || 0;
              return `Score: ${value}%`;
            }
            return null;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
        ticks: {
          precision: 0,
          callback: (value) => `${value}%`,
        },
      },
    },
  };

  return (
    <div>
          <h2 className='learning-analytics-heading'>Learning Analytics</h2>
      <div className="single-trainee-container">
        <div className="progress-blocks-bar-graph">
          <h3 className="chart-title">Scores per category</h3>
          <Bar data={data} options={options} />
        </div>
        {assignedPrograms.length > 0 ? (
          <div className="single-chart-container">
            <h3 className="chart-title">Progress</h3>
            <div className="chart-section">
              <EmployeeProgressChart assignedCourses={assignedPrograms} traineeId={selectedTrainee._id} />
            </div>
          </div>
        ) : (
          <div>Loading Employee Progress Chart...</div>
        )}
        <div className="progress-section">
          <ProgressSection index={0} title="Avg. completion rate" dataString={`${averageCompletionRate}%`} />
          <ProgressSection index={1} title="Avg. learning time" dataString={`${averageLearningTime} days`} />
          <ProgressSection index={2} title="Total Courses" dataString={`${totalCourses}`} />
          <ProgressSection index={3} title="Avg. Total Score" dataString={`${averageTotalScore}%`} />
        </div>
      </div>
    </div>

  );
};

export default TraineeDataVisual;

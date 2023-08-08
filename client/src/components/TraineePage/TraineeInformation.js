
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { fetchAllTrainees } from '../../services/DashboardService';
import { Link } from 'react-router-dom';
import Select from "react-select";
//import 'firebase/compat/storage';
//import { SearchBar } from ‘react-native-elements’;
const TraineeInformation = () => {
  const [trainees, setTrainees] = useState([]);
  //const [selectedCourse, setSelectedCourse] = useState(courses.length > 0 ? courses[0] : null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const traineesData = await fetchAllTrainees();
        setTrainees(traineesData);
      } catch (error) {
        console.error('Error fetching trainees:', error);
      }
    };
    fetchData();
  }, []);
  const calculateLearningTime = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : now;
    const differenceInMilliseconds = end - start;
    const minutes = Math.floor(differenceInMilliseconds / 60000);
    return minutes ;
  };
  const completedPrograms = (trainee) =>
  trainee.assigned_training_programs.filter(
    (program) => program.status === "Completed"
  );
  const totalLearningTime = (trainee) => {
    const programs = completedPrograms(trainee);
    const totalMinutes = programs.reduce((totalTime, program) => {
      const startDate = new Date(program.start_date);
      const endDate = program.end_date
        ? new Date(program.end_date)
        : null;
      const learningTimeInMinutes = calculateLearningTime(startDate, endDate);
      return totalTime + learningTimeInMinutes;
    }, 0);
    // Now, let’s format the totalMinutes into a human-readable format
    if (totalMinutes > 350) {
      const hours = Math.floor(totalMinutes / 60);
      if (hours > 70) {
        const days = Math.floor(hours / 24);
        return days + " days";
      }
      return hours + " hours";
    }
    return totalMinutes + " minutes";
  };
  const totalCompletedCourses = (trainee) => {
    return trainee.assigned_training_programs.reduce((completedCourses, program) => {
      if (program.status === "Completed" && program.evaluation === 1) {
        return completedCourses + 1;
      }
      return completedCourses;
    }, 0);
  };
  const completionPercentage = (trainee) => {
    const completedLessons = totalCompletedCourses(trainee);
    if (completedLessons === 0) {
      return 0;
    }
    return Math.round((completedLessons / trainee.assigned_training_programs.length) * 100);
  };
  const averageScore = (trainee) => {
    const completedPrograms = trainee.assigned_training_programs.filter(
      (program) => program.status === "Completed" && program.evaluation === 1
    );
    const totalScore = completedPrograms.reduce((total, program) => total + program.score, 0);
    return totalScore > 0 ? Math.floor(totalScore / completedPrograms.length) : 0;
  };
  return (
    <div class="table-layout">
       <div className='filter-section'>
        <Select
          className='filter-select'
          placeholder="Sort"
        />
        <Select className='filter-select'
        placeholder="Last Week"  />
      </div>
      <div>
      </div>
      <div className="table-container table-containerss">
        <table class="trainee-table trainee-tabless table-container table-containerss">
            <tr class="row-header-layout">
              <th className="centered-heading" colSpan={2}>Employee</th>
              <th className="centered-heading">Learning Time</th>
              <th className="centered-heading">Courses</th>
              <th className="centered-heading">Completion</th>
              <th className="centered-heading">Score</th>
              <th className="centered-heading"></th>
            </tr>
            {trainees.map((trainee) => (
              <tr class="row-layout" key={trainee._id}>
                <td className='centered-text centered-textss' colSpan={2}>
                  <div className='image-name image-namess'>
                    <div className='circle circlss'>
                      <img className='trainee-photo trainee-photoss' src={trainee.photo} alt="Trainee" />
                    </div>
                    <span>{trainee.name}</span>
                  </div>
                </td>
                <td className='centered-text centered-textss'>
                  {trainee.assigned_training_programs.length > 0
                    ? totalLearningTime(trainee) // Call totalLearningTime with the current trainee
                    : "-"}
                </td>
                <td className='centered-text centered-textss'>{trainee.assigned_training_programs.length}</td>
                <td className='centered-text centered-textss'>{completionPercentage(trainee)}%</td>
                <td className='centered-text centered-textss'>{averageScore(trainee)}</td>
                <td className='centered-text centered-textss'>
                  <Link className='see-profile-link see-profile-linkss' to='/trainees/traineePage' state={{ traineeId: `${trainee._id}` }}>See Profile</Link>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};
export default TraineeInformation;
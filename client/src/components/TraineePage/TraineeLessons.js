import React, { useEffect, useState } from 'react';
import Select from "react-select";
import logo from '../../assets/avatar.png';
// import TraineeSection from '../DashboardTrainees/TraineeSection';
import TraineeTable from './TraineeTable';
import { match } from 'assert';

const TraineeLessons = ({key ,courses, traineesData, onSelectCourse}) => {

  const [selectedCourse, setSelectedCourse] = useState(courses.length > 0 ? courses[0] : null);


  useEffect(() => {
    setSelectedCourse(selectedCourse);
  }, [selectedCourse, traineesData]);


      const options = courses.map((course) => ({
        value: course._id,
        label: course.name
      }));
      const customStyle = {
        dropdownIndicator: (base, state) => ({
          ...base,
          transition: "all .6s ease",
          transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null
        })
      };
      
      const handleChange = (selectedOption) => {
        const selectedCourseId = selectedOption.value;
        const matchingCourse = courses.find((course) => course._id === selectedCourseId);
        setSelectedCourse(matchingCourse);
        onSelectCourse(matchingCourse)
      };
    

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

      const empData = traineesData.map((trainee) => {
        // Find the assigned training program for the selected course        
        const selectedCourseProgram = trainee.assigned_training_programs.find(
          (program) => program.course_id === selectedCourse._id
        );
        return {
          name: trainee.name,
          imageUrl: logo,
          learningTime: selectedCourseProgram && selectedCourseProgram.start_date
          ? calculateLearningTime(selectedCourseProgram.start_date)
          : "-", // Calculate learning time only if program exists for selected course
            finalScore: selectedCourseProgram ? getFinalScore(selectedCourseProgram) : ""
            , // Display final score only if program exists for selected course
          courseStatus: selectedCourseProgram ? selectedCourseProgram.status : "" // Display course status only if program exists for selected course
        };
      });


    // Sort the empData array based on the courseStatus in the desired order
    empData.sort((a, b) => {
      const statusOrder = {
        Completed: 1,
        "In progress": 2,
        "Not Started": 3
      };
      return statusOrder[a.courseStatus] - statusOrder[b.courseStatus];
    });  

  return (
    <div className='analytics-left'>
      <h1>
        Learning Analytics
      </h1>
      <div className='filter-section'>
        <Select
          className='filter-select'
          label='Course'
          value={selectedCourse ? selectedCourse.value : null}
          options={options}
          openMenuOnFocus
          onChange={handleChange}
          styles={customStyle}
        />
        <Select className='filter-select' label='Last week' options={options} openMenuOnFocus styles={customStyle} />
      </div>
      <div className='trainee-section'>
        <h3 className='trainee-section-title'>Top Employees</h3>
        <div className='trainee-list'>
            <table>
             <thead>
                <tr className="header-row">
                  <th></th>
                  <th>Name</th>
                  <th>Learning Time</th>
                  <th>Final Score</th>
                  <th>Status</th>
                </tr>
               </thead>
                <tbody>
                  {empData.map((item, index) => (
                    <TraineeTable
                      key={index}
                      index={index}
                      name={item.name}
                      imageUrl={item.imageUrl}
                      learningTime={item.learningTime}
                      finalScore={item.finalScore}
                      courseStatus={item.courseStatus}
                    />
                  ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default TraineeLessons

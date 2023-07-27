import React, { useEffect, useState } from 'react';
import Select from "react-select";
import logo from '../../assets/avatar.png';
import TraineeSection from './TraineeSection';
import { match } from 'assert';
import { Link } from 'react-router-dom';

const DashboardTrainees = ({selectedCourse ,courses, traineesData, onSelectCourse}) => {

  const [courseSelected, setCourseSelected] = useState(selectedCourse);
  const [dateSelected, setDateSelected] = useState({value: 'All', label: 'All'});

  useEffect(() => {
    setCourseSelected(selectedCourse);
  }, [setCourseSelected]);

      const options = courses.map((course) => ({
        value: course._id,
        label: course.name
      }));

      const dateFilterOption = [
        {
          value: 'All',
          label: 'All'
        },
        {
          value: 'Last Week',
          label: 'Last Week'
        },
        {
          value: 'Last Month',
          label: 'Last Month'
        },
        {
          value: 'Last Year',
          label: 'Last Year'
        }
      ]

      const customStyle = {
        dropdownIndicator: (base, state) => ({
          ...base,
          transition: "all .6s ease",
          transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null
        })
      };
      
      const handleChange = (selectedOption) => {
        console.log(selectedCourse)
        const selectedCourseId = selectedOption.value;
        const matchingCourse = courses.find((course) => course._id === selectedCourseId);
        setCourseSelected(matchingCourse);
        onSelectCourse(matchingCourse)
      };

      const handleDateChange = (selectedOption) => {
        
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
      
        // Get the first name and the initial of the last name
        const nameParts = trainee.name.split(" ");
        const firstName = nameParts[0];
        const lastNameInitial = nameParts.length > 1 ? nameParts[nameParts.length - 1].charAt(0) : "";
      
        return {
          name: firstName + " " + lastNameInitial + ".",
          imageUrl: logo,
          learningTime: selectedCourseProgram && selectedCourseProgram.start_date
            ? calculateLearningTime(selectedCourseProgram.start_date)
            : "-", // Calculate learning time only if program exists for selected course
          finalScore: selectedCourseProgram ? getFinalScore(selectedCourseProgram) : "", // Display final score only if program exists for selected course
          courseStatus: selectedCourseProgram ? selectedCourseProgram.status : "", // Display course status only if program exists for selected course
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
      <h1 className='analytics-heading'>
        Learning Analytics
      </h1>
      <div className='filter-section'>
        {
          selectedCourse ? 
          (<Select
            className='filter-select'
            label='Course'
            defaultValue={selectedCourse ? { value: selectedCourse._id, label: selectedCourse.name } : null}
            options={options}
            openMenuOnFocus
            onChange={handleChange}
            styles={customStyle}
          />) :
          (<Select
            className='filter-select'
            label='Course'
            defaultValue={selectedCourse ? { value: selectedCourse._id, label: selectedCourse.name } : null}
            options={options}
            openMenuOnFocus
            onChange={handleDateChange}
            styles={customStyle} 
          />)
        }
        {
          dateSelected ? 
          (<Select           
            className='filter-select'
            label='Date'
            defaultValue={dateSelected}
            options={dateFilterOption}
            openMenuOnFocus
            onChange={handleDateChange}
            styles={customStyle}
          />) :
          (<Select           
            className='filter-select'
            label='Date'
            defaultValue={dateSelected ? { value: dateSelected.value, label: dateSelected.name } : null}
            options={dateFilterOption}
            openMenuOnFocus
            onChange={handleDateChange}
            styles={customStyle}
          />)
        }

        
      </div>
      <div className='trainee-section'>
        <h3 className='trainee-section-title'>Top Employees</h3>
        <div className='trainee-list'>
            <table>
             <thead>
                <tr className="header-row">
                  <th className="header-text"></th>
                  <th className="header-text">Name</th>
                  <th className="header-text">Learning Time</th>
                  <th className="header-text">Final Score</th>
                  <th className="header-text">Status</th>
                </tr>
               </thead>
                <tbody>
                  {empData.map((item, index) => (
                    <TraineeSection
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
        <div className='see-all-container'>
          <Link className='see-all' to='/trainees'>See All</Link>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="12" viewBox="0 0 36 12" fill="none">
            <path d="M35.5657 6.56568C35.8781 6.25326 35.8781 5.74673 35.5657 5.43431L30.4745 0.343143C30.1621 0.0307238 29.6556 0.0307238 29.3431 0.343143C29.0307 0.655563 29.0307 1.16209 29.3431 1.47451L33.8686 6L29.3431 10.5255C29.0307 10.8379 29.0307 11.3444 29.3431 11.6569C29.6556 11.9693 30.1621 11.9693 30.4745 11.6569L35.5657 6.56568ZM6.99382e-08 6.8L35 6.8L35 5.2L-6.99382e-08 5.2L6.99382e-08 6.8Z" fill="#6AD38B"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default DashboardTrainees

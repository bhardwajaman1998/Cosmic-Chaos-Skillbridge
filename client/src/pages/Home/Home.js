import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import DashboardButtons from '../../components/DashboardButtons/DashboardButtons'
import DashboardTrainees from '../../components/DashboardTrainees/DashboardTrainees'
import DashboardDataVisualSection from '../../components/DataVisualize/DashboardDataVisualSection'

import { fetchAllCourses, fetchTraineesByCourseId } from '../../services/DashboardService';


const Home = () => {

    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [traineesData, setTraineesData] = useState([]);
  
    useEffect(() => {
      const getCourses = async () => {
        try {
          const coursesData = await fetchAllCourses();
          setCourses(coursesData);
          if (coursesData.length > 0) {
            setSelectedCourse((prevSelectedCourse) => {
              // Update selectedCourse only if it hasn't been set yet
              if (!prevSelectedCourse) {
                return coursesData[0];
              }
              return prevSelectedCourse;
            });
            handleCourseSelection(coursesData[0]);
          }
        } catch (error) {
          // Handle error
        }
      };
      getCourses();
    }, []);
  
    const handleCourseSelection = async (courseId) => {
      console.log(courseId)
        setSelectedCourse(courseId);
        try {
          const traineesData = await fetchTraineesByCourseId(courseId._id);
          setTraineesData(traineesData);
        } catch (error) {
          // Handle error
        }
    };
    return (
      <React.Fragment>
        <div className='dashboard-layout'>
          <section>
            <div className='layout text-2xl text-white'>
              <div className='layout-sidebar'>
                <Sidebar />
              </div>
              <div className='layout-header'>
                <Header />
              </div>
              <div className='layout-main'>
                <DashboardButtons />
              </div>
              <div className='layout-left'>
                <DashboardTrainees key={selectedCourse} courses={courses} traineesData={traineesData} onSelectCourse={handleCourseSelection} />
              </div>
              <div className='layout-right'>
                <DashboardDataVisualSection selectedCourse={selectedCourse} traineesData={traineesData} />
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  };

export default Home

import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import DashboardButtons from '../../components/DashboardButtons/DashboardButtons'
import DashboardTrainees from '../../components/DashboardTrainees/DashboardTrainees'
import DashboardDataVisualSection from '../../components/DataVisualize/DashboardDataVisualSection'

import { fetchAllCourses, fetchAllTrainees } from '../../services/DashboardService';


const Home = () => {

    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [traineesData, setTraineesData] = useState([]);
  
    useEffect(() => {
      const getCourses = async () => {
        try {
          const coursesData = await fetchAllCourses();
          setCourses(coursesData);
        } catch (error) {
          // Handle error
        }
      };
  
      getCourses();
    }, []);
  
    const handleCourseSelection = async (courseId) => {
      setSelectedCourse(courseId);
      try {
        const traineesData = await fetchAllTrainees(courseId);
        setTraineesData(traineesData);
      } catch (error) {
        // Handle error
      }
    };
  
  return (
    <React.Fragment>
        <div className='dashboard-layout'>
            <section>
                <div  className="layout text-2xl text-white">
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
                        <DashboardTrainees />
                    </div> 
                    <div className='layout-right'>
                        <DashboardDataVisualSection />
                    </div> 
                </div>   
            </section>
        </div>
    </React.Fragment>
  )
}

export default Home

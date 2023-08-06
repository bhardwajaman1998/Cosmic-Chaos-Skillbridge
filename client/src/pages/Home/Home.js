import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import DashboardButtons from '../../components/DashboardButtons/DashboardButtons';
import DashboardTrainees from '../../components/DashboardTrainees/DashboardTrainees';
import DashboardDataVisualSection from '../../components/DataVisualize/DashboardDataVisualSection';
import LoadingSpinner from '../../components/Loading/LoadingSpinner';

import { fetchAllCourses, fetchTraineesByCourseId } from '../../services/DashboardService';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [traineesData, setTraineesData] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const getCourses = async () => {
      try {
        setLoading(true);
        //remove this, this is just to simulate loading spinner
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        const coursesData = await fetchAllCourses();
        setCourses(coursesData);
        if (coursesData.length > 0) {
          setSelectedCourse(coursesData[0]);
          handleCourseSelection(coursesData[0]);
        }
      } catch (error) {
        // Handle error
      } finally {
        setLoading(false);
      }
    };
    getCourses();
  }, []);

  const handleCourseSelection = async (courseId) => {
    try {
      setLoading(true);
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      const traineesData = await fetchTraineesByCourseId(courseId._id);
      setSelectedCourse(courseId);
      setTraineesData(traineesData);
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };


// mobile view sidebar functions
const handleHamburgerIconClick = () => {
  setSidebarOpen(!isSidebarOpen); // Toggle the sidebar state
  const dashboardLayout = document.querySelector(".dashboard-layout");
  dashboardLayout.classList.toggle("sidebar-show");
  console.log('Hamburger icon clicked!');
};

const closeBar = () => {
  const dashboardLayout = document.querySelector(".dashboard-layout");
  dashboardLayout.classList.toggle("sidebar-show");
  setSidebarOpen(false);
}

  return (
    <React.Fragment>
      <div className="dashboard-layout">
        <section>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="layout text-2xl text-white">
              <div className="layout-sidebar">
                <div className={`sidebar-container ${isSidebarOpen ? 'sidebar-show' : ''}`}>
                  <Sidebar closeSidebar={closeBar}/>
                </div>
              </div>
              <div className="layout-header">
                <Header onHamburgerIconClick={handleHamburgerIconClick}/>
              </div>
              <div className="layout-main">
                <DashboardButtons />
              </div>
              <div className="layout-left">
                <DashboardTrainees
                  selectedCourse={selectedCourse}
                  courses={courses}
                  traineesData={traineesData}
                  onSelectCourse={handleCourseSelection}
                />
              </div>
              <div className="layout-right">
                <DashboardDataVisualSection selectedCourse={selectedCourse} traineesData={traineesData} />
              </div>
            </div>
          )}
        </section>
      </div>
    </React.Fragment>
  );
};

export default Home;

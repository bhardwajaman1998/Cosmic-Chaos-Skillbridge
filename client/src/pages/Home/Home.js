import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import DashboardButtons from '../../components/DashboardButtons/DashboardButtons';
import DashboardTrainees from '../../components/DashboardTrainees/DashboardTrainees';
import DashboardDataVisualSection from '../../components/DataVisualize/DashboardDataVisualSection';
import LoadingSpinner from '../../components/Loading/LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import { fetchAllCourses, fetchTraineesByCourseId } from '../../services/DashboardService';
import Cookies from 'js-cookie';

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [traineesData, setTraineesData] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const getCourses = async () => {
      try {
        setLoading(true);
        const coursesData = await fetchAllCourses();
        setCourses(coursesData);
        if (coursesData.length > 0) {
          setSelectedCourse(coursesData[0]);
          handleCourseSelection(coursesData[0]);
        }
      } catch (error) {
        const parsedError = JSON.parse(error.message);
        if (parsedError && parsedError.code === 403) {
          removeTokenLogout()
        } else {
          console.error('Error fetching data:', error);
        }
      } finally {
        setLoading(false);
      }
    };
    getCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCourseSelection = async (courseId) => {
    try {
      setLoading(true);
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      const traineesData = await fetchTraineesByCourseId(courseId._id);
      setSelectedCourse(courseId);
      setTraineesData(traineesData);
    } catch (error) {
      const parsedError = JSON.parse(error.message);
      if (parsedError && parsedError.code === 403) {
        removeTokenLogout()
      } else {
        console.error('Error fetching data:', error);
      }
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

const removeTokenLogout = () =>{
  Cookies.remove('jwtToken');
  window.alert('Session timed out'); // Display the alert message
  navigate('/');
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

import React, { useState, useEffect } from 'react';
import { fetchTraineeByID } from '../../services/DashboardService';
import TraineeInfo from '../../components/Feedback/TraineeInfo'
import TraineeSubmission from '../../components/Feedback/TraineeSubmission'
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const TraineeFeedback = () => {
    const navigate = useNavigate();
    const [selectedTrainee, setSelectedTrainee] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const location = useLocation()
    const { traineeId, courseId } = location.state;

    useEffect(() => {
        const filterCourseById = (courseId, trainee) => {
            const course = trainee.assigned_training_programs.find(
              (program) => program.course_id === courseId
            );
            setSelectedCourse(course);
        };
        const fetchData = async () => {
            try {
                if (traineeId) {
                    const traineeData = await fetchTraineeByID(traineeId);
                    filterCourseById(courseId, traineeData);
                    setSelectedTrainee(traineeData);
                }
            } catch (error) {
              const parsedError = JSON.parse(error.message);
              if (parsedError && parsedError.code === 403) {
                removeTokenLogout()
              } else {
                console.error('Error fetching data:', error);
              }
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },  [traineeId, courseId]);

    
    if (!selectedTrainee) {
        return <div>Loading trainee information...</div>;
    }

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
    <div className='dashboard-layout'>
      <section>
        <div className='layout text-2xl text-white'>
          <div className="layout-sidebar">
            <div className={`sidebar-container ${isSidebarOpen ? 'sidebar-show' : ''}`}>
              <Sidebar closeSidebar={closeBar}/>
            </div>
          </div>
          <div className="layout-header">
                <Header title={'Employee submission evaluation'} showBackButton={true}  onHamburgerIconClick={handleHamburgerIconClick}/>
          </div>
          <div className='layout-main'>
            <div className='trainee-feedback-container'>
                {selectedTrainee ? 
                    <TraineeInfo key={selectedCourse} trainee={selectedTrainee} course={selectedCourse}/>
                    :
                    <></>
                }
                {selectedTrainee ? 
                    <TraineeSubmission key={selectedCourse} trainee={selectedTrainee} courseId={courseId}/>
                    :
                    <></>
                }
            </div>
          </div>
        </div>
      </section>
    </div>
  </React.Fragment>



  )
}

export default TraineeFeedback

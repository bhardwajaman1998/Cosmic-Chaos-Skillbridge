import React, { useState } from 'react';
// import TraineeInformation from '../../../components/TraineePage/TraineeInformation';
import Header from '../../../components/Header/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';
// import CourseInformation from '../../../components/TraineePage/CourseInformation';
import SingleTrainee from '../../../components/TraineePage/SingleTrainee';
import { useLocation } from 'react-router-dom'

// import { Routes, Route } from 'react-router-dom';

// const pageTitle='Employee File'
const TraineePage= () => {
  const location = useLocation()
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { traineeId } = location.state
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
  // if (!from) history.push('/admin');
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
              <Header showBackButton={true} onHamburgerIconClick={handleHamburgerIconClick}/>
            </div>
            <div className='layout-main'>
              <SingleTrainee traineeId={traineeId}/>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};



export default TraineePage;

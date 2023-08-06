import React, { useEffect, useState } from 'react';
import TraineeInformation from '../../../components/TraineePage/TraineeInformation';
import Header from '../../../components/Header/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';
// import CourseInformation from '../../../components/TraineePage/CourseInformation';
// import { Route, Routes } from 'react-router-dom';
const pageTitle = "Employees";
const Employee = () => {
// mobile view sidebar functions
const [isSidebarOpen, setSidebarOpen] = useState(false);

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
      <div className='dashboard-layout'>
        <section>
          <div className='layout text-2xl text-white'>
            <div className="layout-sidebar">
                <div className={`sidebar-container ${isSidebarOpen ? 'sidebar-show' : ''}`}>
                  <Sidebar closeSidebar={closeBar}/>
                </div>
              </div>
            <div className='layout-header'>
              <Header title={pageTitle} showBackButton={false} onHamburgerIconClick={handleHamburgerIconClick} />
            </div>
            <div className='trainee-information'>
              <TraineeInformation />
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};



export default Employee;

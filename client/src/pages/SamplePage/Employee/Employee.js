import React from 'react';
import TraineeInformation from '../../../components/TraineePage/TraineeInformation';
import Header from '../../../components/Header/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';
// import CourseInformation from '../../../components/TraineePage/CourseInformation';
// import { Route, Routes } from 'react-router-dom';
const pageTitle = "Employees";
const Employee = () => {
  return (
    <React.Fragment>
      <div className='dashboard-layout'>
        <section>
          <div className='layout text-2xl text-white'>
            <div className='layout-sidebar'>
              <Sidebar />
            </div>
            <div className='layout-header'>
              <Header title={pageTitle} showBackButton={true} />
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

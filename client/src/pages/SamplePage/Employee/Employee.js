import React from 'react';
import TraineeInformation from '../../../components/TraineePage/TraineeInformation';
import Header from '../../../components/Header/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';
import CourseInformation from '../../../components/TraineePage/CourseInformation';
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
              <Header />
            </div>
            <div>
              <h1>Trainee Information</h1>
              <TraineeInformation />
              <CourseInformation />
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};



export default Employee;

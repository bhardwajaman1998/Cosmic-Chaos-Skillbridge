import React from 'react';
// import TraineeInformation from '../../../components/TraineePage/TraineeInformation';
import Header from '../../../components/Header/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';
// import CourseInformation from '../../../components/TraineePage/CourseInformation';
import SingleTrainee from '../../../components/TraineePage/SingleTrainee';
import { useLocation } from 'react-router-dom'

// import { Routes, Route } from 'react-router-dom';

const pageTitle='Employee File'
const TraineePage= () => {
  const location = useLocation()
  const { traineeId } = location.state
  // if (!from) history.push('/admin');
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
              <SingleTrainee traineeId={traineeId}/>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};



export default TraineePage;

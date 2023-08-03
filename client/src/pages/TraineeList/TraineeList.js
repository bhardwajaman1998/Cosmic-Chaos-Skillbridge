import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import TraineeListComponent from '../../components/TraineeList/TraineeListComponent';

import { fetchAllTrainees, fetchAllCourses } from '../../services/DashboardService';


const TraineeList = () => {
  const [trainees, setTrainees] = useState([]);

  


  useEffect(() => {
    const fetchAllTrainee = async () => {
        try {
          const traineesData = await fetchAllTrainees();
          setTrainees(traineesData);
          console.log(traineesData)
        } catch (error) {
          // Handle error
      }
    };
    fetchAllTrainee();
  }, []);



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
               <TraineeListComponent traineesData={trainees}/>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  };

export default TraineeList
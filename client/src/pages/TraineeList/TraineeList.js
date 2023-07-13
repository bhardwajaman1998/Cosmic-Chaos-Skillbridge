import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import DashboardButtons from '../../components/DashboardButtons/DashboardButtons'
import DashboardTrainees from '../../components/DashboardTrainees/DashboardTrainees'
import DashboardDataVisualSection from '../../components/DataVisualize/DashboardDataVisualSection'

import { fetchAllTrainees } from '../../services/DashboardService';


const TraineeList = () => {
  const [trainees, setTrainees] = useState([]);

  useEffect(() => {
    const fetchAllTrainee = async () => {
      try {
        const response = await fetchAllTrainees(); // Replace with your API endpoint
        const data = await response.json();
        setTrainees(data);
      } catch (error) {
        console.error('Error fetching trainees:', error);
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
               <TraineeList />
              </div>
              
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  };

export default TraineeList
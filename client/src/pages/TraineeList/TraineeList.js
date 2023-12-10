import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import TraineeListComponent from '../../components/TraineeList/TraineeListComponent';
import { useNavigate } from 'react-router-dom';
import { fetchAllTrainees, fetchAllCourses } from '../../services/DashboardService';
import Cookies from 'js-cookie';


const TraineeList = () => {
  const navigate = useNavigate();
  const [trainees, setTrainees] = useState([]);

  useEffect(() => {
    const fetchAllTrainee = async () => {
        try {
          const traineesData = await fetchAllTrainees();
          setTrainees(traineesData);
          console.log(traineesData)
        } catch (error) {
          const parsedError = JSON.parse(error.message);
          if (parsedError && parsedError.code === 403) {
            removeTokenLogout()
          } else {
            console.error('Error fetching data:', error);
          }
        }
    };
    fetchAllTrainee();
  }, []);
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
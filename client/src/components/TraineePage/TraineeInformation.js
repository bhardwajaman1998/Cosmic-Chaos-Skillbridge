import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchAllTrainees } from '../../services/DashboardService';
import { Link } from 'react-router-dom';
import Select from "react-select";
//import { SearchBar } from 'react-native-elements';
const TraineeInformation = () => {
  const [trainees, setTrainees] = useState([]);
  //const [selectedCourse, setSelectedCourse] = useState(courses.length > 0 ? courses[0] : null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const traineesData = await fetchAllTrainees();
        setTrainees(traineesData);
      } catch (error) {
        console.error('Error fetching trainees:', error);
      }
    };

    fetchData();
  }, []);
  return (  
    <div class="table-layout">
       <div className='filter-section'>
        <Select
          className='filter-select'
          placeholder="Sort"          
        />
        <Select className='filter-select' 
        placeholder="Last Week"  />
      </div>
      <div>
      </div>     
      <div className="table-wrapper, ">
        <table class="table-layout">
          <thead >
            <tr class="row-header-layout">
            <th>Photo</th>
            <th>Name</th> 
            <th>Email</th>
                          
              {/* <th>Phone Number</th> */}
              <th>Role</th>
              
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainees.map((trainee) => (
              <tr class="row-layout" key={trainee._id}>
                 <td>
                  <img src={trainee.photo} alt="Trainee" />
                </td>
                <td>{trainee.name}</td>
                <td>{trainee.email}</td>
                
                {/* <td>{trainee.phone_number}</td> */}
                <td>{trainee.department.name}</td>
               
                <td>
                  <Link to='/trainees/traineePage' state={{ traineeId: `${trainee._id}` }}>See Profile</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TraineeInformation;

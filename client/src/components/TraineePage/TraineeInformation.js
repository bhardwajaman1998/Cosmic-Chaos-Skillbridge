import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchAllTrainees } from '../../services/DashboardService';
import { Link } from 'react-router-dom';


const TraineeInformation = () => {
  const [trainees, setTrainees] = useState([]);

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
    
    <div >
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Employee ID</th>
              {/* <th>Phone Number</th> */}
              <th>Role</th>
              <th>Photo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainees.map((trainee) => (
              <tr key={trainee._id}>
                <td>{trainee.name}</td>
                <td>{trainee.email}</td>
                <td>{trainee._id}</td>
                {/* <td>{trainee.phone_number}</td> */}
                <td>{trainee.department.name}</td>
                <td>
                  <img src={trainee.photo} alt="Trainee" />
                </td>
                <td>
                  {/* <Link to='/trainees/traineePage/feedback' state={{ traineeId: `${trainee._id}`, courseId: '64a768ec8c0b52e60969e1c7'}}>See Profile</Link> */}
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

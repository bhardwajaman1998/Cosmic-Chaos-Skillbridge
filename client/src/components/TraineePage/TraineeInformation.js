import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchAllTrainees } from '../../services/DashboardService';

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
    <div>
      <h1>Trainee Page</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Employee ID</th>
            <th>Phone Number</th>
            <th>Role</th>
            <th>Onboarding Date</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {trainees.map((trainee) => (
            <tr key={trainee._id}>
              <td>{trainee.name}</td>
              <td>{trainee.email}</td>
              <td>{trainee.employeeId}</td>
              <td>{trainee.phone_number}</td>
              <td>{trainee.department.name}</td>
              <td>{trainee.onboardingDate}</td>
              <td>
                <img src={trainee.photo} alt="Trainee" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TraineeInformation;

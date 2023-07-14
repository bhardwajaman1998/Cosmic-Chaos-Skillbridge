import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchAllTrainees } from '../../services/DashboardService';
import { Link } from 'react-router-dom';
import CourseInformation from './CourseInformation';

const SingleTrainee = () => {
  const [trainees, setTrainees] = useState([]);
  const [assignedPrograms, setPrograms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const traineesData = await fetchAllTrainees();
        setTrainees(traineesData);
        setPrograms(traineesData. assigned_training_programs)
      } catch (error) {
        console.error('Error fetching trainees:', error);
      }
    };

    fetchData();
  }, []);

  const firstTrainee = trainees.length > 0 ? trainees[0] : null;

  return (
    <div>
      <h1>Trainee Page</h1>
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
            </tr>
          </thead>
          <tbody>
            {firstTrainee && (
              <tr key={firstTrainee._id}>
                <td>{firstTrainee.name}</td>
                <td>{firstTrainee.email}</td>
                <td>{firstTrainee._id}</td>
                {/* <td>{firstTrainee.phone_number}</td> */}
                <td>{firstTrainee.department.name}</td>
                <td>
                  <img src={firstTrainee.photo} alt="Trainee" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <CourseInformation assignedCourses={assignedPrograms} traineeId={firstTrainee._id} />
    </div>
  );
};

export default SingleTrainee;

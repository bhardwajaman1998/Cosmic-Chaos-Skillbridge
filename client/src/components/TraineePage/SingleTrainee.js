import React, { useEffect, useState } from 'react';
import { fetchTraineeByID } from '../../services/DashboardService';
import CourseInformation from './CourseInformation';

const SingleTrainee = ({ traineeId }) => {
  const [selectedTrainee, setSelectedTrainee] = useState(null);
  const [assignedPrograms, setAssignedPrograms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (traineeId) {
          const traineeData = await fetchTraineeByID(traineeId);
          setSelectedTrainee(traineeData);
          setAssignedPrograms(traineeData.assigned_training_programs);
        }
      } catch (error) {
        console.error('Error fetching trainee:', error);
      }
    };

    fetchData();
  }, [traineeId]);

  if (!selectedTrainee) {
    return <div>Loading trainee information...</div>;
  }

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
              <th>Role</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr key={selectedTrainee._id}>
              <td>{selectedTrainee.name}</td>
              <td>{selectedTrainee.email}</td>
              <td>{selectedTrainee._id}</td>
              <td>{selectedTrainee.department.name}</td>
              <td>
                <img src={selectedTrainee.photo} alt="Trainee" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
      {selectedTrainee ? (
        <CourseInformation assignedCourses={assignedPrograms} traineeId={selectedTrainee._id} /> 
        ) : (
          <></>
       )}
        </div>
    </div>
  );
};

export default SingleTrainee;
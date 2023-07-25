import React, { useEffect, useState } from 'react';
import { fetchTraineeByID } from '../../services/DashboardService';
import CourseInformation from './CourseInformation';
import ProfilePic from '../../assets/profile-pic-male-01.png'
import EmployeeProgressChart from './EmployeeProgressChart';
import TraineeDataVisual from './TraineeDataVisual';
import ChartLabel from '../DataVisualize/ChartLabel';
import ArrowRight from '../../assets/arrow-right-circle.svg'

const SingleTrainee = ({ traineeId, traineeData }) => {
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

    const completedCourses = assignedPrograms.filter(course => course.evaluation === 1).length;
    const evaluatedCourses = assignedPrograms.filter(course => course.evaluation === 1 || course.evaluation === 0).length;
    const pendingCourses = assignedPrograms.filter(course => course.evaluation === 0).length;

    if (!selectedTrainee) {
        return <div>Loading trainee information...</div>;
    }

    return (
        <div className='single-trainee'>
            <div className='employee-card'>

                <div className='employee-name-pic-wrapper'>
                    <h2>{selectedTrainee.name}</h2>
                    <img src={ProfilePic} alt="Trainee" />
                </div>

                <div className='employee info'>
                    <div className='employee-input-label-wrapper'>
                        <label for='employee-name'>Full Name</label>
                        <input id='employee-name' readOnly value={selectedTrainee.name}></input>
                    </div>
                    <div className='employee-input-label-wrapper'>
                        <label for='employee-role'>Role</label>
                        <input id='employee-role' readOnly value={selectedTrainee.department.name}></input>
                    </div>
                    <div className='employee-input-label-wrapper'>
                        <label for='employee-id'>Employee ID</label>
                        <input id='employee-id' readOnly value={selectedTrainee._id}></input>
                    </div>
                    <div className='employee-input-label-wrapper'>
                        <label for='employee-email'>Email</label>
                        <input id='employee-email' readOnly value={selectedTrainee.email}></input>
                    </div>
                    <div className='employee-input-label-wrapper'>
                        <label for='employee-onboard'>Onboarding</label>
                        <input id='employee-onboard' readOnly value={'18 March 2023'}></input>
                    </div>
                    <div className='employee-input-label-wrapper'>
                        <label for='employee-ph'>Telephone</label>
                        <input id='employee-ph' readOnly value={'(778) 976 814 994'}></input>
                    </div>
                </div>
                <div className='learning-activity'>
                    <h3>Learning Activity</h3>
                    <p>{completedCourses} Course(s) finished</p>
                    <p>{evaluatedCourses} solution(s) evaluated</p>
                    <p><b>{pendingCourses} evaluation(s) pending</b></p>
                </div>
            </div>
            <div>
                {selectedTrainee ? (
                    <CourseInformation assignedCourses={assignedPrograms} traineeId={selectedTrainee._id} />
                ) : (
                    <></>
                )}
            </div>
            <TraineeDataVisual traineeData={selectedTrainee} assignedCourses={assignedPrograms}
                traineeId={traineeId} />



        </div>
    );
};

export default SingleTrainee;
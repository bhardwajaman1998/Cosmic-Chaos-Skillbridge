import React, { useEffect, useState } from 'react';
import { fetchTraineeByID } from '../../services/DashboardService';
import CourseInformation from './CourseInformation';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import EmployeeProgressChart from './EmployeeProgressChart';
import TraineeDataVisual from './TraineeDataVisual';
import ChartLabel from '../DataVisualize/ChartLabel';
import ArrowRight from '../../assets/arrow-right-circle.svg'
import LoadingSpinner from '../Loading/LoadingSpinner';

const SingleTrainee = ({ traineeId, traineeData }) => {
    const [selectedTrainee, setSelectedTrainee] = useState(null);
    const [assignedPrograms, setAssignedPrograms] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (traineeId) {
                    const timeout = setTimeout(() => {
                        setLoading(false);
                      }, 2000);
                    const traineeData = await fetchTraineeByID(traineeId);
                    setSelectedTrainee(traineeData);
                    setAssignedPrograms(traineeData.assigned_training_programs);

                    const storageRef = firebase.storage().ref();
                    const fileRef = storageRef.child(`trainees/${traineeId}.jpg`);
                    const downloadURL = await fileRef.getDownloadURL();
                    setImageUrl(downloadURL);
                    clearTimeout(timeout);
                    setLoading(false);
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
            <div className='employee-info-layout'>
                <div className='employee-card'>
                    <div className='employee-name-pic-wrapper'>
                        <h2>{selectedTrainee.name}</h2>
                        {/* <img src={imageUrl} alt="Trainee" /> */}
                        {loading ? (

                            <LoadingSpinner />
                        ) : (

                            <img className="profile-pic" src={imageUrl} alt="Trainee" />
                        )}
                    </div>
                    <div className='employee-info'>
                        <div className='employee-input-label-wrapper'>
                            <label for='employee-name' className='label-margin'>Full Name</label>
                            <input id='employee-name' readOnly value={selectedTrainee.name}></input>
                        </div>
                        <div className='employee-input-label-wrapper'>
                            <label for='employee-role' className='label-margin'>Role</label>
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
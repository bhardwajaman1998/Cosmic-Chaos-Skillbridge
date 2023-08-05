import React, { useState, useEffect } from 'react';
import { fetchTraineeByID } from '../../services/DashboardService';
import TraineeInfo from '../../components/Feedback/TraineeInfo'
import TraineeSubmission from '../../components/Feedback/TraineeSubmission'
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom'

const TraineeFeedback = () => {
    const [selectedTrainee, setSelectedTrainee] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState([]);

    const location = useLocation()
    const { traineeId, courseId } = location.state;

    useEffect(() => {
        const filterCourseById = (courseId, trainee) => {
            const course = trainee.assigned_training_programs.find(
              (program) => program.course_id === courseId
            );
            setSelectedCourse(course);
        };
        const fetchData = async () => {
            try {
                if (traineeId) {
                    const traineeData = await fetchTraineeByID(traineeId);
                    filterCourseById(courseId, traineeData);
                    setSelectedTrainee(traineeData);
                }
            } catch (error) {
                console.error('Error fetching trainee:', error);
            }
        };
        fetchData();
    },  [traineeId, courseId]);

    
    if (!selectedTrainee) {
        return <div>Loading trainee information...</div>;
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
            <Header title={'Employee submission evaluation'} showBackButton={true} />
          </div>
          <div className='layout-main'>
            <div className='trainee-feedback-container'>
                {selectedTrainee ? 
                    <TraineeInfo key={selectedCourse} trainee={selectedTrainee} course={selectedCourse}/>
                    :
                    <></>
                }
                {selectedTrainee ? 
                    <TraineeSubmission key={selectedCourse} trainee={selectedTrainee} courseId={courseId}/>
                    :
                    <></>
                }
            </div>
          </div>
        </div>
      </section>
    </div>
  </React.Fragment>



  )
}

export default TraineeFeedback

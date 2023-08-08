import React from 'react'
import arrow from '../../assets/see-profile.png'
import dots from '../../assets/dots.png'
import { Link } from 'react-router-dom';

const EmployeesMobileView = ({key, id, name, photo, learningTime, totalPrograms, completionPercentage, averageScore}) => {
    const handleRedirection = () =>{
        <Link to='/trainees/traineePage' state={{ traineeId: `${key}` }}></Link>
    }
  
    return (
    <div className='single-employee-mobile-view'>
        <div className='image-name image-namess'>
            <div className='circle circlss'>
                <img className='trainee-photo trainee-photoss' src={photo} alt="Trainee" />
            </div>
            <span>{name}</span>
            <img className='dots-profile' src={dots} alt="arrow" />
        </div>
        <div className='mobile-view-main'>
            <div className='mobile-view-info'>
                <span className='mobile-heading'>Score:</span>
                <span className='mobile-description'>{averageScore}</span>
            </div>
            <div className='mobile-view-info'>
                <span className='mobile-heading'>Learning Time:</span>
                <span className='mobile-description'>{learningTime}</span>
            </div>
            <div className='mobile-view-info'>
                <span className='mobile-heading'>Courses:</span>
                <span className='mobile-description'>{totalPrograms}</span>
            </div>
            <div className='mobile-view-info'>
                <span className='mobile-heading'>Completion:</span>
                <span className='mobile-description'>{completionPercentage}%</span>
            </div>
        </div>
        <div className='mobole-view-see-profile' onClick={handleRedirection}>
        <Link className='link-profile-text' to='/trainees/traineePage' state={{ traineeId: `${id}` }}>See Profile</Link>
            {/* <span className='link-profile-text'>See Profile</span> */}
            <img className='arrow-profile' src={arrow} alt="arrow" />
        </div>
    </div>
  )
}

export default EmployeesMobileView

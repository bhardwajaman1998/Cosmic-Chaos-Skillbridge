import React from 'react'

const TraineeInfo = ({trainee, course}) => {
    console.log(course.end_date)
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(course.end_date).toLocaleDateString(undefined, options);


  return (
    <div className='trainee-info-container'>
        <h1>Employee details</h1>
        <div className='info-div-container'>
            <div className='trainee-info-div'>
                <span className='trainee-info-div-title'>Name</span>
                {trainee ?
                    <span className='trainee-info-div-description'>{trainee.name}</span>
                    :    
                    <span></span>
                }
            </div>
            <div className='trainee-info-div'>
                <span className='trainee-info-div-title'>Role</span>
                {trainee ?
                    <span className='trainee-info-div-description'>{trainee.department.name}</span>
                    :    
                    <span></span>
                }
            </div>
            <div className='trainee-info-div'>
                <span className='trainee-info-div-title'>Employee ID</span>
                {trainee ?
                    <span className='trainee-info-div-description'>{trainee._id}</span>
                    :    
                    <span></span>
                }
            </div>
            <div className='trainee-info-div'>
                <span className='trainee-info-div-title'>Submission date</span>
                {trainee ?
                    <span className='trainee-info-div-description'>{formattedDate}</span>
                    :    
                    <span></span>
                }
            </div>
            <div className='trainee-info-div'>
                <span className='trainee-info-div-title'>Email</span>
                {trainee ?
                    <span className='trainee-info-div-description'>{trainee.email}</span>
                    :    
                    <span></span>
                }
            </div>
        </div>
    </div>
  )
}

export default TraineeInfo

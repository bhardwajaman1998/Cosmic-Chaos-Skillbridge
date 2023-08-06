import React from 'react'

const TraineeSection = ({index, name, imageUrl, learningTime, finalScore, courseStatus}) => {
    let statusCellClassName = '';
    let statusCellBgColor = '';
    let statusCellTextColor = '';
  
    if (courseStatus === 'Completed') {
      statusCellClassName = 'status-cell completed';
      statusCellBgColor = 'rgba(106, 211, 139, 1)';
      statusCellTextColor = 'black';
    } else if (courseStatus === 'In progress') {
      statusCellClassName = 'status-cell in-progress';
      statusCellBgColor = 'black';
      statusCellTextColor = 'white';
    } else if (courseStatus === 'Not Started') {
      statusCellClassName = 'status-cell not-started';
      statusCellBgColor = 'rgba(188, 188, 188, 1)';
      statusCellTextColor = 'black';
    }
    const isMobile = window.innerWidth <= 768;
  return (
    <>
      {isMobile ? (
        <tr className='tarinee-row' key={index}>
        <td>
            <div className='circle'>
                <img className='trainee-photo' src={imageUrl} alt="Trainee" />
              </div>
        </td>
        <td>
            <span className='table-name'>{name}</span>
        </td>
        <td>
            <div className={statusCellClassName} style={{ backgroundColor: statusCellBgColor, color: statusCellTextColor }}>
                <span className='status-cell-text'>{courseStatus}</span>
            </div>
        </td>
      </tr>
      ) : (
        <tr className='tarinee-row' key={index}>
            <td>
              <div className='circle'>
                <img className='trainee-photo' src={imageUrl} alt="Trainee" />
              </div>   
            </td>
            <td>
                <span>{name}</span>
            </td>
            <td>
                <span>{learningTime}</span>
            </td>
            <td>
                <span>{finalScore}</span>
            </td>
            <td>
                <div className={statusCellClassName} style={{ backgroundColor: statusCellBgColor, color: statusCellTextColor }}>
                    <span className='status-cell-text'>{courseStatus}</span>
                </div>
            </td>
          </tr>
        )}
    </>
  )
}

export default TraineeSection

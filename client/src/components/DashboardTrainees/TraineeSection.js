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
  return (
        <tr className='tarinee-row' key={index}>
            <td>
                <img src={imageUrl} alt="Icon" /> 
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
                    <span>{courseStatus}</span>
                </div>
                
            </td>
        </tr>
  )
}

export default TraineeSection

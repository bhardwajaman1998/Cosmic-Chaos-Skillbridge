import React from 'react'

const TraineeSection = ({index, name, imageUrl, learningTime, finalScore, courseStatus}) => {
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
                <div className='status-cell'>
                    <span>{courseStatus}</span>
                </div>
                
            </td>
        </tr>
  )
}

export default TraineeSection

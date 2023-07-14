import React from 'react'

const TraineeListSection = ({index, imageUrl,name,learningTime,courses,completion, finalScore }) => {
   
  return (
        <tr className='trainee-list-row' key={index}>
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
                <span>{courses}</span>
            </td>
            <td>
                <span>{completion}</span>
            </td>
            <td>
                <span>{finalScore}</span>
            </td>
            <td>
                <a>viewProfile</a>
            </td>
            
        </tr>
  )
}

export default TraineeListSection

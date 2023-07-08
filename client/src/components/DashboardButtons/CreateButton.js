import React from 'react'
import arrowIcon from '../../assets/arrow-icon.svg';

const CreateButton = ({index, title, icon}) => {
  return (
    <div  key={index} className='create-buttons'>
        <img src={icon} alt="Icon" />
        <span>{title}</span>
        <img src={arrowIcon} alt="Icon" />
    </div>
  )
}

export default CreateButton

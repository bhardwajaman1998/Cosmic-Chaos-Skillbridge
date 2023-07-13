import React from 'react'
import arrowIcon from '../../assets/arrow-icon.svg';

const CreateButton = ({index, title, mobileTitle, icon}) => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div  key={index} className='create-buttons'>
        <img className='create-icon' src={icon} alt="Icon" />
        <span className='create-title'>{isMobile ? mobileTitle : title}</span>
        <img className='create-arrow' src={arrowIcon} alt="Icon" />
    </div>
  )
}

export default CreateButton

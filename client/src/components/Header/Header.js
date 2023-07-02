import React from 'react'
import profile from '../../assets/profile-icon.svg';
import notification from '../../assets/notification-icon.svg';


const Header = ({title='Dashboard'}) => {
  return (
    <div className='header'>
        <span className='header-title'>
            {title}
        </span>

        <div className='header-options'>
            <button className='create-button'>
                + Create
            </button>
            <img src={notification} alt="Icon" />
            <img src={profile} alt="Icon" />
        </div>
    </div>
  )
}

export default Header

import React, { useEffect } from 'react'
import profile from '../../assets/profile-icon.svg';
import notification from '../../assets/notification-icon.svg';
import { useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Header = ({ title }) => {
   
  useEffect(() => {
    document.title = title;
  }, [title]);

  const location = useLocation();

  const isHomePage = location.pathname === '/';



  return (
    <div className='header'>
      {!isHomePage && (
        <div className='header-title'>
          <ArrowBackIcon />
          <span>
            {title}
        </span>
        </div>
      )}
      {isHomePage &&(
        <span className='header-title'>
            {title}
        </span>

      )}       
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

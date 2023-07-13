import React, { useEffect, useState } from 'react';
import profile from '../../assets/avatar.png';
import notification from '../../assets/notification-icon.svg';
import { useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';



const Header = ({ title='Dashboard' }) => {
   
  useEffect(() => {
    document.title = title;
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [title]);

    const location = useLocation();

    const isHomePage = location.pathname === '/';

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
      };

      handleResize(); // Check initial screen size
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
      <div className="header">
        {isSmallScreen ? (
          <div className="hamburger-icon">
            <MenuIcon />
          </div>
        ) : (
          <>
            {!isHomePage && (
              <div className="header-title">
                <ArrowBackIcon className="arrow-back-icon" />
                <span>{title}</span>
              </div>
            )}
            {isHomePage && <span className="header-title">{title}</span>}
          </>
        )}
        <div className="header-options">
          <button className="create-button">+ Create</button>
          <img className='header-icons' src={notification} alt="Icon" />
          <img className='header-icons' src={profile} alt="Icon" />
        </div>
      </div>
    );
  };

export default Header
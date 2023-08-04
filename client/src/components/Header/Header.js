import React, { useEffect, useState } from 'react';
import profile from '../../assets/avatar.png';
import notification from '../../assets/notification-icon.svg';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';



const Header = ({ title='Dashboard', showBackButton, onHamburgerIconClick }) => {
   
  useEffect(() => {
    document.title = title;
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [title]);

    // const isHomePage = location.pathname === '/';

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
      };

      handleResize(); // Check initial screen size
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, []);


    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1);
    };

    const handleHamburgerIconClick = () => {
      // Call the callback function passed from the Home component
      if (onHamburgerIconClick) {
        onHamburgerIconClick();
      }
      // You can also toggle the sidebar state here if needed:
      // setSidebarOpen(!isSidebarOpen);
    };

    return (
      <div className="header">
        {isSmallScreen ? (
          <div className="hamburger-icon" onClick={handleHamburgerIconClick}>
            <MenuIcon />
          </div>
        ) : (
          <>
            {showBackButton && (
              <div className="header-title-with-back">
                <ArrowBackIcon className="arrow-back-icon"  onClick={handleGoBack}/>
                <span className="header-title-text">{title}</span>
              </div>
            )}
            {!showBackButton && <span className="header-title">{title}</span>}
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

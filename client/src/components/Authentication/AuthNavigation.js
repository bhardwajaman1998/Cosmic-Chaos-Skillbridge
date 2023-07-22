import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';


const AuthNavigation = () => {
  const location = useLocation();

  const isSignUpActive = location.pathname === '/SignUp';
  const isSignInActive = location.pathname === '/SignIn';
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/');
  };
  return (
    
    <div>
    <div className='icon-auth'>
    <ArrowBackIcon className="arrow-back-icon" onClick={handleGoBack} />
    <CloseIcon  className="arrow-back-icon" onClick={handleGoBack} />
    </div>
    <div className='auth-navbar'>
      <div className="auth-nav">
          <NavLink
            to="/SignUp"
            className={`auth-nav-item ${isSignUpActive ? 'active' : ''}`}
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/SignIn"
            className={`auth-nav-item ${isSignInActive ? 'active' : ''}`}
          >
            Log In
          </NavLink>
          <div className='underline'></div>
          </div>
      </div>
    </div>
  );
};

export default AuthNavigation;



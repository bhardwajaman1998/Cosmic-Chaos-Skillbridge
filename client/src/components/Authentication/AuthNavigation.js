import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AuthNavigation = () => {
  const location = useLocation();

  const isSignUpActive = location.pathname === '/SignUp';
  const isSignInActive = location.pathname === '/SignIn';
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/');
  };
  return (
    <div className="auth-navbar">
    <ArrowBackIcon className="arrow-back-icon" onClick={handleGoBack} />
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
  );
};

export default AuthNavigation;



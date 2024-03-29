import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthNavigation from './AuthNavigation';
import Cookies from 'js-cookie';

const SignIn = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const API_BASE_URL = process.env.REACT_APP_LIVE_API_BASE_URL
  const oneHour = 2/24;

  const handleSignIn = async () => {
    try {
      if (!email || !password) {
        // Show an alert if fields are empty
        alert('Please enter both email and password');
        return;
      }
      // Make an API call to log in the user
      const response = await axios.post(`${API_BASE_URL}/admin/login`, { email, password });
      const token = response.data.token;
      Cookies.set('jwtToken', token, { expires: oneHour });
      // localStorage.setItem('token', token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <AuthNavigation />
      <div className='authentication-form'>
      <h2>It's good to have you back!</h2>
      <div className="custom-input-label-wrapper">
        <label for="Email">Email</label>
        <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="custom-input-label-wrapper">
        <label for="password">Password</label>
        <input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="auth-buttons" onClick={handleSignIn}>Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthNavigation from './AuthNavigation';

const SignIn = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const API_BASE_URL = process.env.REACT_APP_TEST_API_BASE_URL;
  const handleSignIn = async () => {
    try {
      // Make an API call to log in the user
      const response = await axios.post(`${API_BASE_URL}/admin/login`, { email, password });

      // Handle the response and redirect if needed
      console.log(response.data);
      const token = response.data.token;
      // Save the token to localStorage or secure cookie
      localStorage.setItem('token', token);
      // Redirect the user to the home page (dashboard)
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

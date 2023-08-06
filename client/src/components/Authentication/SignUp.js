import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthNavigation from './AuthNavigation';
// import WelcomeMessage from './WelcomeMessage';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
  const API_BASE_URL = process.env.REACT_APP_LIVE_API_BASE_URL//'https://skill-bridge-backend.onrender.com';
  const handleSignUp = async () => {
    try {
    //   const response = await axios.post('http://localhost:3000/signup', { email, password, username });
      const response = await axios.post(`${API_BASE_URL}/admin/signup`, { email, password, username, name });
      console.log(response.data);
      setIsSignUpSuccessful(true); // Set the sign-up success state to true
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  useEffect(() => {
    if (isSignUpSuccessful) {
      const timeout = setTimeout(() => {
        navigate('/WelcomeMessage');
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [isSignUpSuccessful, navigate]);

  return (
    <div>
      <AuthNavigation />
      <div className="authentication-form">
        <h2>Create Your Account</h2>
        <div className="custom-input-label-wrapper">
          <label for='email'>Email</label>
          <input type="email" id='email'  value={email} onChange={(e) => setEmail(e.target.value)} name="email" />
        </div>
        <div className="custom-input-label-wrapper">
          <label for='password'>Password</label>
          <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="custom-input-label-wrapper">
          <label for='username'>Username</label>
          <input type="text" id='username'  value={username} onChange={(e) => setUsername(e.target.value)} />

        </div>
        <div className="custom-input-label-wrapper">
          <label for='name'>Name</label>
          <input type="text" id='name'value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button className="auth-buttons" onClick={handleSignUp}>Sign Up</button>
        {/* Display a success message if sign-up is successful */}
        {/* {isSignUpSuccessful && <WelcomeMessage />} */}
      </div>
    </div>
  );
};

export default SignUp;

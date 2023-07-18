import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthNavigation from './AuthNavigation';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);

  const handleSignUp = async () => {
    try {
      // Make an API call to sign up the user
    //   const response = await axios.post('http://localhost:3000/signup', { email, password, username });
      const response = await axios.post('http://localhost:3000/admin/signup', { email, password, username, name });
      // Handle the response as needed
      console.log(response.data);
      setIsSignUpSuccessful(true); // Set the sign-up success state to true
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  // Redirect to sign-in component after 5 seconds
  useEffect(() => {
    if (isSignUpSuccessful) {
      const timeout = setTimeout(() => {
        navigate('/signin');
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
          <input type="email" id='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" />
        </div>
        <div className="custom-input-label-wrapper">
          <label for='password'>Password</label>
          <input type="password" id='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="custom-input-label-wrapper">
          <label for='username'>Username</label>
          <input type="text" id='username' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="custom-input-label-wrapper">
          <label for='name'>Name</label>
          <input type="text" id='name' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button className="auth-buttons" onClick={handleSignUp}>Sign Up</button>
        {/* Display a success message if sign-up is successful */}
        {isSignUpSuccessful && <p>Successfully signed up!</p>}
      </div>
    </div>
  );
};

export default SignUp;

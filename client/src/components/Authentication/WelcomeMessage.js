// import React, { useEffect } from 'react'
// import arrowIcon from '../../assets/arrow-icon.svg';
import { Link } from 'react-router-dom';

const WelcomeMessage = () => {
  // const navigate = useNavigate();
  // const naviGate =() => {
  //   navigate('/signin');
  // }

  return (
    <div className='welcome-message'>
        <h2>Welcome to your training program!</h2>
        <p>Your account has been successfully activated, and now you're ready to embark on an exciting learning journey. Build new skills and Accelerate your professional growth.</p>
        <Link to="/dashboard"><button className="auth-buttons">Get Started</button> </Link>
    </div>
  )
}

export default WelcomeMessage

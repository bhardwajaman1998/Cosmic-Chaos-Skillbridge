// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h2>SkillBridge</h2>
        </div>
        <div className="footer-nav">
          <ul className='column'>
            <li><h4><a href="/how-it-works">How It Works</a></h4></li>
            <li><h4><a href="/the-team">The Team</a></h4></li>
            <li><h4><a href="/contact-us">Contact Us</a></h4></li>
            <div className='column'>
            <li><h4><a href="/create-account">Create an Account</a></h4></li>
            <li><h4><a href="/sign-in">Sign In</a></h4></li>
            </div>
          </ul>
          
        </div>
        
        <p>
        Langara College <br /> 
        100 West 49th Ave <br /> 
        Vancouver, BC <br /> 
        Canada V5Y 2Z6
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;

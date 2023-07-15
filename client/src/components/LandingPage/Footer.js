// Footer.js

import React from 'react';
import './Footer.css';
import Logo from '../LandingPage/image/Layer_1.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
        <div className="logo-container">
        <img src={Logo} alt="SkillBridge" />
        </div>
          <h2>SkillBridge</h2>
        </div>
        <div className="footer-nav">
        <h4><a href="/how-it-works">How it Works</a></h4>
        <h4><a href="/the-team">The Team</a></h4>
          <h4><a href="/contact-us">Contact Us</a></h4>
          </div>
          <div className="footer-nav2">
          <h4><a href="/create-account">Create Account</a></h4>
          <h4><a href="/sign-in">Sign In</a></h4>
            </div>         
        
         <div className="address">
          Langara College<br />
          100 West 49th Ave<br />
          Vancouver, BC<br />
          Canada V5Y 2Z6
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

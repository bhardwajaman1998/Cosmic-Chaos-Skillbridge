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
        <a href="/how-it-works">How it Works</a>
          <a href="/the-team">The Team</a>
          <a href="/contact-us">Contact Us</a>
          </div>
          <div className="footer-nav2">
          <a href="/create-account">Create Account</a>
          <a href="/sign-in">Sign In</a>
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

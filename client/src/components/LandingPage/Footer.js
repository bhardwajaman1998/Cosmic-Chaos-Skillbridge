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
          <ul>
            <li><h4><a href="/how-it-works">How It Works</a></h4></li>
            <li><h4><a href="/the-team">The Team</a></h4></li>
            <li><h4><a href="/contact-us">Contact Us</a></h4></li>
            <li><h4><a href="/create-account">Create an Account</a></h4></li>
            <li><h4><a href="/sign-in">Sign In</a></h4></li>
          </ul>
        </div>
        <div className="subscribe-container">
          <h3>Subscribe to Learn More</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

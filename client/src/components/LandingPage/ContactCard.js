import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./ContactCard.css";



const ContactCard = ({ imgSrc, name, roles, linkedinUrl, githubUrl, twitterUrl }) => {
  return (
    <div className="contact-card slide-card">
      <div className="circle-container">
        <img src={imgSrc} alt={name} className="contact-card-img" />
      </div>
      <h2 className="team-names">{name}</h2>
      {roles && <p>{roles}</p>}
      <div className="social-links">
        {linkedinUrl && (
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
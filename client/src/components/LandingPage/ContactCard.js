import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./ContactCard.css";
import AmanImage from "../LandingPage/profile/Aman.jpg";
import BrianImage from "../LandingPage/profile/Brian.jpg";
import MonicaImage from "../LandingPage/profile/Monica.jpg";
import NatasjaImage from "../LandingPage/profile/Natasja.jpg";
import SanmeetImage from "../LandingPage/profile/Sanmeet.jpg";
import VaibhavImage from "../LandingPage/profile/Vaibhav.jpg";
import VaneetImage from "../LandingPage/profile/Vaneet.jpg";

const ContactCard = ({ imgSrc, name, roles, linkedinUrl }) => {
  return (
    <div className="contact-card">
      <div className="circle-container">
        <div className="slider-container">
          <div className="slide-card">
            <img src={imgSrc} alt={name} className="contact-card-img" />
          </div>
        </div>
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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7, // Display 7 cards in desktop view
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768, // Breakpoint for mobile devices
      settings: {
        slidesToShow: 1, // Display 1 cards in mobile view
        slidesToScroll: 1,
      },
    },
  ],
};

// Render the "Meet the team" section directly after the ContactCard component
const ContactCardWithMeetTheTeam = () => {
  
  return (
    <div className="teams">
      <h2 className="team-text">Meet the team</h2>
      <p className="team-text">
        At Cosmic Chaos, we take pride in our exceptional team of professionals who bring passion, creativity, and expertise to every project. Our diverse team members possess a wide range of skills and experience, allowing us to tackle various challenges and deliver outstanding results.
      </p>
      <div className="member-card">
        <div className="card-row">
          <ContactCard
            imgSrc={AmanImage}
            name="Aman Bhardwaj"
            roles="Full Stack Developer Lead"
            linkedinUrl="https://www.linkedin.com/in/amanbhardwaj-/"
          />
          <ContactCard
            imgSrc={BrianImage}
            name="Brian Ungjun Yeo"
            roles="Full Stack Developer"
            linkedinUrl="https://www.linkedin.com/in/ungjun-yeo"
          />
          <ContactCard
            imgSrc={MonicaImage}
            name="Monica Varma"
            roles="UX/UI Designer"
            linkedinUrl="https://www.linkedin.com/in/monica-varma/"
          />
          <ContactCard
            imgSrc={NatasjaImage}
            name="Natasja Berzoini"
            roles="UX/UI Designer Lead"
            linkedinUrl="https://www.linkedin.com/in/natasjabrz/"
          />
        </div>
        <div className="card-row">
          <ContactCard
            imgSrc={SanmeetImage}
            name="Sanmeet Singh Malli"
            roles="Full Stack Developer"
            linkedinUrl="https://www.linkedin.com/in/sanmeet-malli/"
          />
          <ContactCard
            imgSrc={VaibhavImage}
            name="Vaibhav Malhotra"
            roles="UX/UI Designer"
            linkedinUrl="https://www.linkedin.com/in/vaibm/"
          />
          <ContactCard
            imgSrc={VaneetImage}
            name="Vaneet Kaur"
            roles="Front End"
            linkedinUrl="http://linkedin.com/in/vaneetk"
          />    
          
        </div>
      </div>
    </div>
  );
};

export default ContactCardWithMeetTheTeam;

import React, { useState } from 'react';
import Card from './Card';
import ContactCard from './ContactCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LandingPage.css';
import Logo from '../LandingPage/image/Logo.png';
import image from '../LandingPage/image/image.png';
import profile from '../LandingPage/image/Profile.png';
import training from '../LandingPage/image/training.png';
import Group from '../LandingPage/image/Group.png'
import Growth from '../LandingPage/image/Growth.png';
import Footer from './Footer';
// Import the JPG images
import AmanImage from "../LandingPage/profile/Aman.jpg";
import BrianImage from "../LandingPage/profile/Brian.jpg";
import MonicaImage from "../LandingPage/profile/Monica.jpg";
import NatasjaImage from "../LandingPage/profile/Natasja.jpg";
import SanmeetImage from "../LandingPage/profile/Sanmeet.jpg";
import VaibhavImage from "../LandingPage/profile/Vaibhav.jpg";
import VaneetImage from "../LandingPage/profile/Vaneet.jpg";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [cardImages] = useState([training, Group, Growth]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const sliderSettings = {
    dots: true,
    dotsClass: 'slider-dots',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    beforeChange: (current, next) => {
      handleSlideChange(next);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='container'>
       <header className='landing-header'>
          <div className={`site-title ${isMobileMenuOpen ? 'hidden' : ''}`}>
            <img src={Logo} alt="SkillBridge" /> 
            <span className="site-title-text">SkillBridge</span>
          </div>
        <nav className={`nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="nav-mobile-toggle" onClick={toggleMobileMenu}>
            <span className={`nav-mobile-icon ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </div>
          {/* <ul className={`nav-list ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}> */}
            <a className='landing-title' href="/HowItWorks">How it works</a>
            <a className='landing-title' href="/Testimonials">Testimonials</a>
            <a className='landing-title' href="/team">Team</a>
            <Link className='landing-title' to='/SignIn'>Sign In</Link>
            {/* <a className='landing-title' href="/SignIn">Signin</a> */}
          {/* </ul> */}
          <button className="btnRes-signup">Sign Up</button>
        </nav>
      </header>
      <div className="section-container">
        <div className="first">
          <div className="image-container">
            <h1>Empower your<br /> employees to grow</h1>
            <p>Our web app is designed to empower employees by providing them with a comprehensive platform to enhance their skills, knowledge, and overall professional development. This innovative tool harnesses the power of technology to deliver a personalized and accessible learning experience for individuals within an organization.</p>
            <button className="btnRes-first">Get started now!</button>
          </div>
          <img src={image} alt="SkillBridge" className="small-image" />         
        </div>
      </div>
      <div className="how-it-works">
        <h2>How it works?</h2>
        <p>The web app operates on a user-friendly platform that makes it easy for employees to navigate and access its features. Upon logging in, employees are greeted with a personalized dashboard that provides them with an overview of their learning progress, recommended courses, and upcoming training activities.</p>
        <Slider {...sliderSettings}>
          
          <div className="card-container">
            <Card
              imgSrc={cardImages[0]}
              title="Code Excellence Unleashed"
              details="Empower your employees with cutting-edge AI tech for real-world problem-solving, code challenges, and instant, personalized feedback"
            ></Card>
          </div>

          <div className="card-container">
            <Card
              imgSrc={cardImages[1]}
              title="Customized Learning Paths"
              details="Tailor courses with our intuitive admin interface and offer targeted lessons, 
              industry-specific challenges for unique 
              team needs."
            ></Card>
          </div>

          <div className="card-container">
            <Card
              imgSrc={cardImages[2]}
              title="Journey to Success"
              details="SkillBridge offers real-time progress tracking for employees' growth. Gain valuable insights into strengths and areas for improvement."
            ></Card>
          </div>

          

        </Slider>
        <div className="slider-dots">
          {cardImages.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <button className="btnRes">
        <a href="#Get started now!">
          <b>Get started now!</b>
        </a>
      </button>

      <div className="slide-container">
        <h2>What other startups are talking about us</h2>
        <p>Across the startup community, our developer training application is generating a buzz as the go-to solution for unlocking the full potential of coding teams.</p>

        <Slider {...sliderSettings}>
          
          <div className="slide1 slide">
            <img src={profile} alt="SkillBridge" />
            <h3>"Guille"</h3>
            <h4>Jr. Frontend Developer</h4>
            <p>
              “Highly recommended! This platform has become an invaluable asset in upskilling our developer team, leading to remarkable project outcomes.”
            </p>
          </div>

          <div className="slide2 slide">
            <img src={profile} alt="SkillBridge" />
            <h3>"Lauren"</h3>
            <h4>Senior Developer, Innovate Labs</h4>
            <p>
            “Incredible! Our startup's developers have witnessed unprecedented growth and efficiency with this game-changing training application”
            </p>
          </div>

          <div className="slide3 slide">
            <img src={profile} alt="SkillBridge" />
            <h3>"Jake"</h3>
            <h4>Founder, TechVista LTD</h4>
            <p>
            “ A game-changer!, our startup has seen a remarkable surge in developer productivity and a substantial reduction in project delivery times”
            </p>
          </div>
          
        </Slider>

        <div className="slider-dots">
        {cardImages.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      </div>

      <div className="teams">
        <h2 className='team-text'>Meet the team</h2>
        <p className='team-text'>At Cosmic Chaos, we take pride in our exceptional team of professionals who bring passion, creativity, and expertise to every project. Our diverse team members possess a wide range of skills and experience, allowing us to tackle various challenges and deliver outstanding results.</p>
        
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
      

      <div className="final">
        <h2>Have Questions? Get in touch with our experts!</h2>
        <p>If you have any questions or need further information about <strong>SkillBridge</strong> and how it can revolutionize your HR training management, we're here to help.<br></br>Reach out now and discover the power of <strong>SkillBridge</strong> for seamless training program management!</p>
        <button className="btnRes-touch">Get in touch</button>
      </div>
      
      <Footer />
    </div>
  );
};


export default LandingPage;

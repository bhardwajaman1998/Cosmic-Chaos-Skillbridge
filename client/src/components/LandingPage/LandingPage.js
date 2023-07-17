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
import training from '../LandingPage/image/training.svg';
import Group from '../LandingPage/image/Group.png'
import Growth from '../LandingPage/image/Growth.svg';


const LandingPage = () => {
  const [cardImages] = useState([training, Group, Growth]);
  const [currentSlide, setCurrentSlide] = useState(0);


  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const sliderSettings = {
    dots: true, // Enable dots
    dotsClass: 'slider-dots', // Custom CSS class for the dots
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    
    beforeChange: (current, next) => {
      handleSlideChange(next);
    },
  };

  

  return (
    <div className='container'>
      <header>
        <nav className="nav">
          <a href="/" className="site-title">
            <img src={Logo} alt="SkillBridge" /> 
            <span className="site-title-text">SkillBridge</span>
            </a>            
          <ul className="nav-list">
            <div className='nav-work'>
            <li><h4><a href="/HowItWorks">How it works</a></h4></li>
            <li><h4><a href="/Testimonials">Testimonials</a></h4></li>
            <li><h4><a href="/team">Team</a></h4></li></div>
            <div className='signin'>
            <li><h4><a href="/SignIn">Signin</a></h4></li>
            <button className="btnRes-signup">
              <a href="#Create your account">
                <b>Sign Up</b>
              </a>
            </button>
            </div>
          </ul>
        </nav>
      </header>
      <div className="section-container">
      <div className='first'>
        <h1>Empower your
           employees to grow</h1>
        <p>Our web app is designed to empower employees by providing them with a comprehensive platform to enhance their skills, knowledge, and overall professional development. This innovative tool harnesses the power of technology to deliver a personalized and accessible learning experience for individuals within an organization.</p>
      
      <div className="button-container">
      <button className="btnRes-first">
        <a href="#Get started now!t">
          <b>Get started now!</b>
        </a>
      </button>
      </div>
    </div>
    <div className="image-container">
      <img src={image} alt="SkillBridge" className="small-image" />
    </div>
    </div>

      <div className='second'>
      <h2>How it works?</h2>
      <p>The web app operates on a user-friendly platform that makes it easy for employees to navigate and access its features. Upon logging in, employees are greeted with a personalized dashboard that provides them with an overview of their learning progress, recommended courses, and upcoming training activities.</p>

      <div className="card-container">
        <Card
          imgSrc={cardImages[0]}
          title="Set goals for your employees"
          details="Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor"
          
        >
          
        </Card>

        <Card
          imgSrc={cardImages[1]}
          title="Create your courses"
          details="Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor"
          
        >
          
        </Card>

        <Card
          imgSrc={cardImages[2]}
          title="Measure their growth"
          details="Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor"
          
        >
  
        </Card>
      </div>
      </div>

      <button className="btnRes">
        <a href="#Get started now!t">
          <b>Get started now!</b>
        </a>
      </button>


      <div className='slide-container'>
  <h2>See what other startups are telling about us</h2>
  <p>Maecenas vitae congue sapien, id molestie magna. Orci varius natoque penatibus et magnis dis parturient montes. 
    Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor tempus tristique at a felis. Praesent eget dapibus lorem.</p>
  
  <div className='card-container2'>
    <Slider {...sliderSettings}>
      <div className="slide1 slide">
      <img src={profile} alt="SkillBridge" />
        <h3>"Guille"</h3>
        <h4>Jr. Frontend Developer</h4>
        <p>Maecenas iaculis varius pulvs.
        "Morbi nec sapien sed dolor tempus. Vivamus non elit condimentum ante finibus gravida eget dignissim neque"</p>
      </div>
      <div className="slide2 slide">
      <img src={profile} alt="SkillBridge" />
        <h3>"Guille"</h3>
        <h4>Jr. Frontend Developer</h4>
        <p>"Morbi nec sapien sed dolor tempus. Vivamus non elit condimentum ante finibus gravida eget dignissim neque"</p>
      </div>
      <div className="slide3 slide">
      <img src={profile} alt="SkillBridge" />
        <h3>"Guille"</h3>
        <h4>Jr. Frontend Developer</h4>
        <p>"Morbi nec sapien sed dolor tempus. Vivamus non elit condimentum ante finibus gravida eget dignissim neque"</p>
      </div>
    </Slider>    
  </div>
  <div className="slider-dots">
      {Array.from({ length: sliderSettings.slidesToShow }).map((_, index) => (
        <div
          key={index}
          className={`dot ${currentSlide === index ? 'active' : ''}`}
          onClick={() => setCurrentSlide(index)}
        />
      ))}
    </div>
</div>

    

      <div className='teams'>
        <h2>Meet the team</h2>
        <p>At Cosmic Chaos, we take pride in our exceptional team of professionals who bring passion, creativity, and expertise to every project. Our diverse team members possess a wide range of skills and experience, allowing us to tackle various challenges and deliver outstanding results.</p>
        <div className='member-card'>
          <div className='card-row'>
            <ContactCard
              imgSrc={require('../LandingPage/profile/Aman.svg').default}
              name="Aman Bhardwaj"
              roles="Full Stack Developer Lead"
              linkedinUrl="https://www.linkedin.com/amanbhardwaj"
            />

            <ContactCard
              imgSrc={require('../LandingPage/profile/Brian.svg').default}
              name="Brian Ungjun Yeo"
              roles="Full Stack Developer"
              linkedinUrl="https://www.linkedin.com/brianungjunyeo"
            />

            <ContactCard
              imgSrc={require('../LandingPage/profile/Monica.svg').default}
              name="Monica Varma"
              roles="UX/UI Designer"              
              linkedinUrl="https://www.linkedin.com/monicavarma"
            />

            <ContactCard
              imgSrc={require('../LandingPage/profile/Natasja.svg').default}
              name="Natasja Berzoini"
              roles="UX/UI Designer Lead"
              linkedinUrl="https://www.linkedin.com/natasjaberzoini"
            />
          </div>

          <div className='card-row'>
            <ContactCard
              imgSrc={require('../LandingPage/profile/Sanmeet.svg').default}
              name="Sanmeet Singh Malli"
              roles="Full Stack Developer"
              linkedinUrl="https://www.linkedin.com/sanmeetmalli"
            />

            <ContactCard
              imgSrc={require('../LandingPage/profile/Vaibhav.svg').default}
              name="Vaibhav Malhotra"
              roles="UX/UI Designer"
              linkedinUrl="https://www.linkedin.com/vaibhavmalhotra"
            />

            <ContactCard
              imgSrc={require('../LandingPage/profile/Vaneet.svg').default}
              name="Vaneet Kaur"
              roles="Front End"
              linkedinUrl="https://www.linkedin.com/vaneetkaur"
            />
          </div>
        </div>
      </div>

      
      <div className='final'>
      <h2>Have Questions? Get in touch with our experts!</h2>
      <p>If you have any questions or need further information about SkillBridge and how it can revolutionize your HR training management, we're here to help. 
        Reach out now and discover the power of SkillBridge for seamless training program management!</p>
      </div>
      <button className="btnRes-touch">
        <b href="#Get in touch">
          Get in touch
        </b>
      </button>

    
      
    </div>
  );
};


export default LandingPage;
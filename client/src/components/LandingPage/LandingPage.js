import React, { useState } from 'react';
import Card from './Card';
import ContactCard from './ContactCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LandingPage.css';
import Footer from './Footer';

const LandingPage = () => {
  const [cardImages, setCardImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleFileUpload = (index, event) => {
    const file = event.target.files[0];
    const updatedImages = [...cardImages];
    updatedImages[index] = URL.createObjectURL(file);
    setCardImages(updatedImages);
  };

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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      handleSlideChange(next);
    },
  };

  

  return (
    <div className='container'>
      <header>
        <nav className="nav">
          <a href="/" className="site-title"><img src='' alt="SkillBridge " /></a>
          <ul>
            <li><h4><a href="/HowItWorks">How it works</a></h4></li>
            <li><h4><a href="/Testimonials">Testimonials</a></h4></li>
            <li><h4><a href="/team">Team</a></h4></li>
            <li><h4><a href="/SignIn">Signin</a></h4></li>
            <button className="btnRes-signup">
              <a href="#Create your account">
                <b>Sign Up</b>
              </a>
            </button>
          </ul>
        </nav>
      </header>

      <div className='first'>
        <h1>Empower your
           employees to grow</h1>
        <p>Our web app is designed to empower employees by providing them with a comprehensive platform to enhance their skills, knowledge, and overall professional development. This innovative tool harnesses the power of technology to deliver a personalized and accessible learning experience for individuals within an organization.</p>
        <div className="image">
          <img src="" alt="css" />
        </div>
      </div>

      <button className="btnRes">
        <a href="#Get started now!t">
          <b>Get started now!</b>
        </a>
      </button>

      <div className='second'>
      <h2>How it works?</h2>
      <p>The web app operates on a user-friendly platform that makes it easy for employees to navigate and access its features. Upon logging in, employees are greeted with a personalized dashboard that provides them with an overview of their learning progress, recommended courses, and upcoming training activities.</p>

      <div className="card-container">
        <Card
          imgSrc={cardImages[0]}
          title="Set goals for your employees"
          details="Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor"
          
        >
          <input type="file" onChange={(event) => handleFileUpload(0, event)} />
        </Card>

        <Card
          imgSrc={cardImages[1]}
          title="Create your courses"
          details="Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor"
          
        >
          <input type="file" onChange={(event) => handleFileUpload(1, event)} />
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
        <h3>"Guille"</h3>
        <h4>Jr. Frontend Developer</h4>
        <p>Maecenas iaculis varius pulvs.
        "Morbi nec sapien sed dolor tempus. Vivamus non elit condimentum ante finibus gravida eget dignissim neque"</p>
      </div>
      <div className="slide2 slide">
        <h3>"Guille"</h3>
        <h4>Jr. Frontend Developer</h4>
        <p>"Morbi nec sapien sed dolor tempus. Vivamus non elit condimentum ante finibus gravida eget dignissim neque"</p>
      </div>
      <div className="slide3 slide">
        <h3>"Guille"</h3>
        <h4>Jr. Frontend Developer</h4>
        <p>"Morbi nec sapien sed dolor tempus. Vivamus non elit condimentum ante finibus gravida eget dignissim neque"</p>
      </div>
    </Slider>
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
</div>

    

      <div className='teams'>
        <h2>Meet the team</h2>
        <p>At Cosmic Chaos, we take pride in our exceptional team of professionals who bring passion, creativity, and expertise to every project. Our diverse team members possess a wide range of skills and experience, allowing us to tackle various challenges and deliver outstanding results.</p>
        <div className='member-card'>
          <div className='card-row'>
            <ContactCard
              imgSrc=""
              name="Aman Bhardwaj"
              roles="Full Stack Developer Lead"
              linkedinUrl="https://www.linkedin.com/amanbhardwaj"
            />

            <ContactCard
              imgSrc=""
              name="Brian Ungjun Yeo"
              roles="Full Stack Developer"
              linkedinUrl="https://www.linkedin.com/brianungjunyeo"
            />

            <ContactCard
              name="Monica Varma"
              roles="UX/UI Designer"
              imgSrc=""
              linkedinUrl="https://www.linkedin.com/monicavarma"
            />

            <ContactCard
              name="Natasja Berzoini"
              roles="UX/UI Designer Lead"
              imgSrc=""
              linkedinUrl="https://www.linkedin.com/natasjaberzoini"
            />
          </div>

          <div className='card-row'>
            <ContactCard
              name="Sanmeet Singh Malli"
              roles="Full Stack Developer"
              imgSrc=""
              linkedinUrl="https://www.linkedin.com/sanmeetmalli"
            />

            <ContactCard
              name="Vaibhav Malhotra"
              roles="UX/UI Designer"
              imgSrc=""
              linkedinUrl="https://www.linkedin.com/vaibhavmalhotra"
            />

            <ContactCard
              name="Vaneet Kaur"
              roles="Front End"
              imgSrc=""
              linkedinUrl="https://www.linkedin.com/vaneetkaur"
            />
          </div>
        </div>
      </div>

      

      <h2>Have Questions? Get in touch with our experts!</h2>
      <p>If you have any questions or need further information about SkillBridge and how it can revolutionize your HR training management, we're here to help. Contact us today, and our friendly team will be delighted to assist you. Let's connect and address any inquiries you may have. Reach out now and discover the power of SkillBridge for seamless training program management!</p>

      <button className="btnRes-touch">
        <b href="#Get in touch">
          Get in touch
        </b>
      </button>

    
      <Footer />
    </div>
  );
};


export default LandingPage;

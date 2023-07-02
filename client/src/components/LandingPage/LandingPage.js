import React, { useState } from 'react';
import Card from './Card';
import './LandingPage.css';
import Footer from './Footer';


const LandingPage = () => {
  const [cardImages, setCardImages] = useState([]);

  const handleFileUpload = (index, event) => {
    const file = event.target.files[0];
    const updatedImages = [...cardImages];
    updatedImages[index] = URL.createObjectURL(file);
    setCardImages(updatedImages);
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
          <button className="btnRes">
                  <a href="#Create your account">
                    <b>Sign Up</b>
                  </a>
                </button>
        </ul>
      </nav>
      </header>
  
      <div className='first'>
      <h1>Empower your employees to grow</h1>
        <p>Our web app is designed to empower employees by providing them with a comprehensive platform 
          to enhance their skills, knowledge, and overall professional development. This innovative tool 
          harnesses the power of technology to deliver a personalized and accessible learning experience for individuals within an organization.</p>
          <div className="image">
          <img src="" alt="css" /></div>          
      </div>
      <button className="btnRes">
                  <a href="#Get started now!t">
                    <b>Get started now!</b>
                  </a>
                </button>
          
          
          <h2>How it works?</h2>
        <p>The web app operates on a user-friendly platform that makes it easy for employees to navigate and access its features. 
          Upon logging in, employees are greeted with a personalized dashboard that provides them with an overview of their learning progress, 
          recommended courses, and upcoming training activities.</p>
          <div className="card-container"> 
           <Card
          title="Set goals for your employees"
          details="Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor" 
          imgSrc={cardImages[0]}
        >
          <input type="file" onChange={(event) => handleFileUpload(0, event)} />
        </Card>

        <Card
          title="Create your courses"
          details="Morbi nec sapien sed dolor tempus tristique at a felis. Praesent eget dapibus lorem." 
          imgSrc={cardImages[1]}
        >
          <input type="file" onChange={(event) => handleFileUpload(1, event)} />
        </Card>

        <Card
          title="Measure their growth"
          details="Maecenas vitae congue sapien, id molestie magna. Orci varius natoque penatibus et magnis" 
          imgSrc={cardImages[2]}
        >
          <input type="file" onChange={(event) => handleFileUpload(2, event)} />
        </Card>
          </div>

           <button className="btnRes">
                  <a href="#Get started now!t">
                    <b>Get started now!</b>
                  </a>
                </button>

          <h2>See what other startups are telling about us</h2>
        <p>Maecenas vitae congue sapien, id molestie magna. Orci varius natoque penatibus et magnis dis parturient montes. </p>
        
        <div className='card-container2'>
        <div class="slideshow-container">
                  <div class="slide">
                  <h3>"Guille"</h3>
                  <h4>Jr. Frontend Developer</h4>
                    <p>"Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor"</p>
                  </div>
                  <div class="slide">
                  <h3>"Guille"</h3>
                  <h4>Jr. Frontend Developer</h4>
                    <p>"Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor"</p>
                  </div>
                  <div class="slide">
                  <h3>"Guille"</h3>
                  <h4>Jr. Frontend Developer</h4>
                    <p>"Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor"</p>
                  </div>
                  <div class="slide">
                  <h3>"Guille"</h3>
                  <h4>Jr. Frontend Developer</h4>
                    <p>"Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor"</p>
                  </div>
                  <div class="slide">
                  <h3>"Guille"</h3>
                  <h4>Jr. Frontend Developer</h4>
                    <p>"Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor"</p>
                  </div>
                  <div class="slide">
                  <h3>"Guille"</h3>
                  <h4>Jr. Frontend Developer</h4>
                    <p>"Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor"</p>
                  </div>
                  <div class="slide">
                  <h3>"Guille"</h3>
                  <h4>Jr. Frontend Developer</h4>
                    <p>"Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor"</p>
                  </div>
  
</div>
          
          </div>

      <div style={{ marginTop: "5em" }}>
      <Card slides={Card} />
        </div>
      
      <div className='teams'>
        <h2>Meet the team</h2>
        <p>At Cosmic Chaos, we take pride in our exceptional team of professionals who bring passion, creativity, and expertise to every project. 
          Our diverse team members possess a wide range of skills and experience, allowing us to tackle various challenges and deliver outstanding results </p>
      <div className='member-card'>       
      <Card
        img src=""
        name="Aman Bhardwaj"
        roles="Full Stack Developer Lead"
        info=""
      />

      <Card
        name="Brian Ungjun Yeo"
        roles="Full Stack Developer" 
      />

      <Card
        name="Monica Varma"
        roles="UX/UI Designer" 
      />

      <Card
        name="Natasja Berzoini"
        roles="UX/UI Designer Lead" 
      />

      <Card
        name="Sanmeet Singh Malli"
        roles="Full Stack Developer" 
      />

      <Card
        name="Vaibhav Malhotra"
        roles="UX/UI Designer" 
      />

      <Card
        name="Vaneet Kaur"
        roles="Front End" 
      />
      </div> 
      </div>

          <h2>Have Questions? Get in touch with our experts!</h2>
        <p>If you have any questions or need further information about SkillBridge and how it can revolutionize your HR training management, 
          we're here to help. Contact us today, and our friendly team will be delighted to assist you. 
          Let's connect and address any inquiries you may have. Reach out now and discover the power of SkillBridge for seamless training program management! </p>
          <button className="btnRes-touch">
                  <b href="#Get in touch">
                    Get in touch
                  </b>
                </button>
                <Footer /> 
        </div>

  );
}

export default LandingPage;

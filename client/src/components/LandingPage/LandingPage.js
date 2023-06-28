import React from 'react';
import Card from './Card';

function LandingPage() {
  return (
    <div>
      <header>
      <nav className="nav">
        <a href="/" className="site-title">SkillBridge</a>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/HowItWorks">How it works</a></li>
          <li><a href="/SignIn">Sign In</a></li>
          <button className="btnRes">
                  <a href="#Create your account">
                    <b>Create your account</b>
                  </a>
                </button>
        </ul>
      </nav>
      </header>
      <h1>SkillBridge empowers employees to grow</h1>
        <p>Vivamus non elit condimentum ante finibus gravida eget dignissim neque. 
          Maecenas iaculis varius pulvinar. Sed vel sem id dui rutrum porta. 
          Morbi nec sapien sed dolor tempus tristique morbi nec sapien sed dolor tempus tristique.</p>

          
          
          <h2>How it works?</h2>
        <p>Maecenas vitae congue sapien, id molestie magna. Orci varius natoque penatibus et magnis dis parturient montes.
           Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor tempus tristique at a felis. Praesent eget dapibus lorem.</p>

           <Card
          title="Set goals for your employees"
          details="Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor" 
          />

          <Card
          title="Creatye your courses"
          details="Morbi nec sapien sed dolor tempus tristique at a felis. Praesent eget dapibus lorem." 
          />

          <Card
          title="Measure their growth"
          details="Maecenas vitae congue sapien, id molestie magna. Orci varius natoque penatibus et magnis" 
          />

           <button className="btnRes">
                  <a href="#Get started now!t">
                    <b>Get started now!</b>
                  </a>
                </button>

          <h2>See what other startups are telling about us</h2>
        <p>Maecenas vitae congue sapien, id molestie magna. Orci varius natoque penatibus et magnis dis parturient montes. </p>

        <Card
          title="Monica"
          details="Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor" 
          />

          <Card
          title="Valbhav"
          details="Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor" 
          />

          <Card
          title="Aman"
          details="Sed vel sem id dui rutrum porta. Morbi nec sapien sed dolor" 
          />

      <div style={{ marginTop: "5em" }}>
      <Card slides={Card} />
        </div>
      

        <h2>Mee the team</h2>
        <p>At Cosmic Chaos, we take pride in our exceptional team of professionals who bring passion, creativity, and expertise to every project. 
          Our diverse team members possess a wide range of skills and experience, allowing us to tackle various challenges and deliver outstanding results </p>
          
      <Card
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

          <h2>Have Questions? Get in touch with our experts!</h2>
        <p>If you have any questions or need further information about SkillBridge and how it can revolutionize your HR training management, 
          we're here to help. Contact us today, and our friendly team will be delighted to assist you. 
          Let's connect and address any inquiries you may have. Reach out now and discover the power of SkillBridge for seamless training program management! </p>
          <button className="btnRes">
                  <a href="#Get in touch">
                    <b>Get in touch</b>
                  </a>
                </button> 
                <footer>
        <div className="footer-content">
          <div className="footer-column">
            <h1>SkillBridge</h1>
            <p>Empowering employees to grow and learn.</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><h3><a href="/create-account">Create an Account</a></h3></li>
              <li><h3><a href="/sign-in">Sign In</a></h3></li>
              <li><h3><a href="/how-it-works">How It Works</a></h3></li>
              <h3>Subscribe to Learn More</h3>

            </ul>
          </div>
        </div>
      </footer>
      
    </div>

  );
}

export default LandingPage;

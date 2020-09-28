import React from 'react';
import './style.css';
import profilepic from './profilepic.jpg';

const AboutCard = () => {
  return (
    <div className="about-card-container">
      <div className="about-card-box">
        <div className="about-card">
          <div className="about-card-body">
            <img src={profilepic} className="profile-img" alt="Patrick Brown" />
            <h1 className="about-card-title">About</h1>
            <hr className="about-break"></hr>
            <h3 className="about-card-text">
              <p>Full stack developer (MERN) with a background in fire sprinkler designer.</p>
              <br></br>

              <p>I have an Associates of Applied Science in Engineering CAD Technology from Hennepin Tech and recently completed the MERN Full Stack boot camp from the University of Minnesota.</p>
              <br></br>

              <p>During the course I worked as a team of two to develop an app, Farmanger, designed to track plants and the space where they're being grown. Technologies include: JavaScript, HTML/CSS, Bootstrap, API routing, and MySQL.</p>
              <br></br>

              <p>As a fire sprinkler designer I have managed and designed large projects (e.g. Life Time Fitness, Edina, MN) and worked collaboratively all my career with a high level of communication and organization.</p>
              <br></br>
              <p>I am eager to learn and excited to create. I love to problem solve and have a great appreciation when design meets functionality.</p>
            </h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutCard

// &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
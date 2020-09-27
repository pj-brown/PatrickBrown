import React from 'react';
import './style.css';
import profilepic from './profilepic.jpg';

const AboutCard = () => {
  return (
    <div className="about-card-container">
      <div className="about-card-box">
        <div className="about-card">
          <img src={profilepic} className="profile-img" alt="Patrick Brown" />
          <div className="about-card-body">
            <h1 className="about-card-title">About</h1>
            <hr className="about-break"></hr>
            <h3 className="about-card-text">
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full stack developer (MERN) with a background in fire sprinkler designer. I am a proficient designer but did not love what I was doing and the COVID-19 pandemic spurred me into making a career change.</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have an Associates of Applied Science in Engineering CAD Technology from Hennepin Tech and recently completed the MERN Full Stack boot camp from UMN.</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;During the course, as a team of two, I developed a straightforward web app, Farmanger, utilizing HTML/CSS, Bootstrap, API routing, MySQL with Sequelize, and JavaScript in the DOM to help a backyard/CSA farmer track their crops and the fields where they’re grown.</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a fire sprinkler designer, I have managed and designed large projects (e.g. Life Time Fitness, Edina, MN) and worked collaboratively all my career with a high level of communication and organization.</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am eager to learn and excited to create. I love to problem solve and have a great appreciation when design meets functionality.</p>
            </h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutCard

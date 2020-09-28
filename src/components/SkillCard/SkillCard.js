import React from 'react';
import './style.css';
import bootstrapicon from './images/bootstrapicon.png';
import css3icon from './images/css3icon.png';
import firebaseicon from './images/firebaseicon.png';
import githubicon from './images/githubicon.png';
import giticon from './images/giticon.png';
import htmlicon from './images/htmlicon.png';
import javascripticon from './images/javascripticon.png';
import jqueryicon from './images/jqueryicon.png';
import mongodbicon from './images/mongodbicon.png';
import mysqlicon from './images/mysqlicon.png';
import nodejsicon from './images/nodejsicon.png';
import reacticon from './images/reacticon.png';

const SkillCard = () => {
  return (
    <div className="skill-card-container">
      <div className="skill-card-box">
        <div className="skill-card">
          <div className="skill-card-body">
            <h1 className="skill-card-title">Skills</h1>
            <hr className="skill-break"></hr>
            <div className="skill-card-icons">

              <div className="tooltip">
                <img src={htmlicon} className="skill-icon" />
                <span className="tooltip-text">HTML</span>
              </div>

              <div className="tooltip">
                <img src={css3icon} className="skill-icon" />
                <span className="tooltip-text">CSS</span>
              </div>

              <div className="tooltip">
                <img src={bootstrapicon} className="skill-icon" />
                <span className="tooltip-text">Bootstrap</span>
              </div>

              <div className="tooltip">
                <img src={javascripticon} className="skill-icon" />
                <span className="tooltip-text">JavaScript</span>
              </div>

              <div className="tooltip">
                <img src={jqueryicon} className="skill-icon" />
                <span className="tooltip-text">jQuery</span>
              </div>

              <div className="tooltip">
                <img src={nodejsicon} className="skill-icon" />
                <span className="tooltip-text">Node.js</span>
              </div>

              <div className="tooltip">
                <img src={githubicon} className="skill-icon" />
                <span className="tooltip-text">GitHub</span>
              </div>

              <div className="tooltip">
                <img src={giticon} className="skill-icon" />
                <span className="tooltip-text">Git</span>
              </div>

              <div className="tooltip">
                <img src={mongodbicon} className="skill-icon" />
                <span className="tooltip-text">mongoDB</span>
              </div>

              <div className="tooltip">
                <img src={mysqlicon} className="skill-icon" />
                <span className="tooltip-text">MySQL</span>
              </div>

              <div className="tooltip">
                <img src={reacticon} className="skill-icon" />
                <span className="tooltip-text">React</span>
              </div>

              <div className="tooltip">
                <img src={firebaseicon} className="skill-icon" />
                <span className="tooltip-text">Firebase</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillCard

// &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
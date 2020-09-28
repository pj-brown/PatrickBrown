import React from 'react';
import PatrickBrownResume from './PatrickBrownResume.pdf';
import './style.css';

const Iframe = () => {
  return (
    <div className="resume-container">
      <iframe title="PatrickBrownResume" className="resume" src={PatrickBrownResume}></iframe>
    </div>
  );
};

export default Iframe;
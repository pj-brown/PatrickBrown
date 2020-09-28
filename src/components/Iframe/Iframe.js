import React from 'react';
import PatrickBrownResume from './PatrickBrownResume.pdf';
import './style.css';

const Iframe = () => {
  return (
    <iframe title="PatrickBrownResume" className="resume" src={PatrickBrownResume}></iframe>
  );
};

export default Iframe;
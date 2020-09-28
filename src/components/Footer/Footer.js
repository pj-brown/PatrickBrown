import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="footer-brand">© Patrick Brown {new Date().getFullYear()}
        <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/patrick-brown-9a3348b5/"><i className="fab fa-linkedin footer-icon" alt="linkedin"></i></a>
        <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://github.com/pj-brown"><i className="fab fa-github-square footer-icon" alt="github"></i></a>
        <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1YMm-RnOHfD_APtPvEILVfJb9TWw__dPa7Iz-xY9mAio/edit?usp=sharing"><i className="fa fa-file-alt footer-icon" alt="resume"></i></a>
        <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/TwoLipKiss"><i className="fab fa-twitter-square footer-icon" alt="twitter"></i></a>
      </h3>
    </div>
  )
}

export default Footer
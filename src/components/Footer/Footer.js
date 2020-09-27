import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="footer-brand">© Patrick Brown 2020
      <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/patrick-brown-9a3348b5/"><i className="fab fa-linkedin" alt="resume"></i></a>
        <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://github.com/pj-brown"><i className="fab fa-github-square" alt="resume"></i></a>
        <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1YMm-RnOHfD_APtPvEILVfJb9TWw__dPa7Iz-xY9mAio/edit?usp=sharing"><i className="fa fa-file-alt" alt="resume"></i></a>
        <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/TwoLipKiss"><i className="fab fa-twitter-square" alt="resume"></i></a>
      </h3>
    </div>
  )
}

export default Footer
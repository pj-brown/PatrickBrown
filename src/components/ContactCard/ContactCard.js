import React from 'react';
import './style.css';

const ContactCard = () => {
  return (
    <div className="contact-card-box">
      <div className="contact-card">
        <div className="contact-card-body">
          <h1 className="contact-card-title">Contact</h1>
          <hr className="contact-break"></hr>
          <div className="contact-card-text">
            <h3><a style={{ color: "#870dc0" }} href="mailto: pjbrown05@gmail.com">Email: pjbrown05@gmail.com</a></h3>
          </div>
          <div className="contact-link-container">
            <a className="contact-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/patrick-brown-9a3348b5/"><i className="fab fa-linkedin" alt="resume"></i></a>
            <a className="contact-link" target="_blank" rel="noopener noreferrer" href="https://github.com/pj-brown"><i className="fab fa-github-square" alt="resume"></i></a>
            <a className="contact-link" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1YMm-RnOHfD_APtPvEILVfJb9TWw__dPa7Iz-xY9mAio/edit?usp=sharing"><i className="fa fa-file-alt" alt="resume"></i></a>
            <a className="contact-link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/TwoLipKiss"><i className="fab fa-twitter-square" alt="resume"></i></a>        </div>
        </div>
      </div>
    </div>)
}

export default ContactCard

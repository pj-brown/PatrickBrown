import React from 'react';
import './style.css';
import Projects from '../components/Projects/Projects';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="page-title">
        <h1>Portfolio</h1>
      </div>
      <Projects></Projects>
    </div>
  )
}

export default Portfolio

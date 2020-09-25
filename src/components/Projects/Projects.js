import React from 'react';
import './style.css';

const Projects = () => {
  const cardInfo = [
    { image: require("../../assets/dishtracker.png"), title: "Dish Tracker", text: "An application designed to track restaurant dishes from your favorite nearby restaurants", repo: "https://github.com/pj-brown/DishTracker", deployed: "https://pj-brown.github.io/DishTracker/", alt: "Dish Tracker!" },
    { image: "", title: "", text: "", repo: "", deployed: "", alt: "" },
    { image: "", title: "", text: "", repo: "", deployed: "", alt: "" },
    { image: "", title: "", text: "", repo: "", deployed: "", alt: "" },
    { image: "", title: "", text: "", repo: "", deployed: "", alt: "" },
    { image: "", title: "", text: "", repo: "", deployed: "", alt: "" },
    { image: "", title: "", text: "", repo: "", deployed: "" }
  ]

  const renderCard = (card, index) => {
    return (
      <div className="card-box" key={index}>
        <div className="card">
          <img variant="top" src={card.image} className="project-img" alt={card.alt} />
          <section className="card-body">
            <h1 className="card-title">{card.title}</h1>
            <hr></hr>
            <h3 className="card-text">{card.text}</h3>
          </section>
          <footer className="card-footer">
            <li className="project-btn left-btn">
              <a className="btn-link" target="_blank" rel="noopener noreferrer" href={card.repo}>Repo</a>
            </li>
            <li className="project-btn right-btn">
              <a className="btn-link" target="_blank" rel="noopener noreferrer" href={card.deployed}>Deployed</a>
            </li>
          </footer>
        </div>
      </div>
    );
  }

  return (
    <div className="card-container">
      {cardInfo.map(renderCard)}
    </div>
  )
}

export default Projects

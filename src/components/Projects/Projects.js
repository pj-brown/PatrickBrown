import React from 'react';
import './style.css';

const Projects = () => {
  const cardInfo = [
    {
      image: require("./images/dishtracker.png"), title: "Dish Tracker", text: "An application designed to track restaurant dishes from your favorite nearby restaurants", repo: "https://github.com/pj-brown/DishTracker", deployed: "https://pj-brown.github.io/DishTracker/", alt: "Dish Tracker"
    },
    {
      image: require("./images/farmanger.png"), title: "Farmanger", text: "Manage your garden or CSA with Farmanger, an app that tracks what you're growing and where", repo: "https://github.com/pj-brown/farmanger", deployed: "https://whispering-ocean-01229.herokuapp.com/", alt: "Farmanger"
    },
    {
      image: "", title: "Password Generator", text: "Generate a random password using upper and lower case letters, symbols, and numbers.", repo: "https://github.com/pj-brown/PasswordGenerator", deployed: "https://pj-brown.github.io/PasswordGenerator/", alt: ""
    },
    {
      image: "", title: "huddleUp", text: "An application designed with a coach in mind - create and manage a team, including team bio, stats, and events.", repo: "", deployed: "", alt: ""
    },
    {
      image: "", title: "", text: "", repo: "", deployed: "", alt: ""
    },
    {
      image: "", title: "", text: "", repo: "", deployed: "", alt: ""
    },
    {
      image: "", title: "", text: "", repo: "", deployed: ""
    }
  ]

  const renderCard = (card, index) => {
    return (
      <div className="card-box" key={index}>
        <div className="card">
          <img src={card.image} className="project-img" alt={card.alt} />
          <div className="card-body">
            <h1 className="card-title">{card.title}</h1>
            <hr className="project-break"></hr>
            <h3 className="card-text">{card.text}</h3>
          </div>
          <footer className="card-footer">
            {/* <ul> */}
            <li className="project-btn left-btn">
              <a className="btn-link" target="_blank" rel="noopener noreferrer" href={card.repo}>Repo</a>
            </li>
            <li className="project-btn right-btn">
              <a className="btn-link" target="_blank" rel="noopener noreferrer" href={card.deployed}>Deployed</a>
            </li>
            {/* </ul> */}
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

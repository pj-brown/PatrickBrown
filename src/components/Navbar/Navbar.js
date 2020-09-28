import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Navbar extends Component {
  state = { clicked: false }


  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="navbar" >
        <Link className="navbar-brand" style={{ textDecoration: "none" }} to="/">
          Patrick Brown
      </Link>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={this.handleClick}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link" onClick={this.handleClick}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={this.handleClick}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-link" onClick={this.handleClick}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

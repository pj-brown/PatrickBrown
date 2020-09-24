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
        <Link className="navbar-logo" style={{ textDecoration: "none" }} to="/">
          Patrick Brown
      </Link>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className={window.location.hash === "/" || window.location.hash === "/about" ? "nav-link active" : "nav-link"}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className={window.location.hash === "/portfolio" ? "nav-link active" : "nav-link"}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={window.location.hash === "/contact" ? "nav-link last-link active" : "nav-link last-link"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };
  render() {
    return (
      <div className="main-nav">
        <h3>Adrianna Web Dev</h3>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavBar;

import React from "react";
import "./NavBar.css";
import Toggle from "../SideBar/Toggle";
import Icon from "./32x32.png";

import { Link } from "react-router-dom";

const NavBar = props => {
  console.log(props);
  return (
    <header className="navBar">
      <nav className="navBar_nav">
        <div>
          <Toggle click={props.sideBarClickHander} />
        </div>
        <div className="nav_logo">
          {" "}
          <Link to="/">
            <img src={Icon} alt="Web Development Icon" />
          </Link>
        </div>
        <span className="name">Adrianna Web Developer</span>
        <div className="space" />
        <div className="nav_links">
          <ul>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;

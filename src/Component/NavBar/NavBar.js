import React from "react";
import "./NavBar.css";
import Toggle from "../SideBar/Toggle";

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
          <Link to="/">ADRIANNA VALOIS</Link>
        </div>
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

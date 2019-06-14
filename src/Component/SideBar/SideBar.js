import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = props => {
  console.log(props);
  let sideBarClasses = ["sideBar"];
  if (props.show) {
    sideBarClasses = "sideBar open";
  }

  return (
    <nav className={sideBarClasses}>
      <ul>
        <Link to="/" onClick={props.linkClick}>
          Home
        </Link>
        <Link to="/projects" onClick={props.linkClick}>
          Projects
        </Link>
        <Link to="/contact" onClick={props.linkClick}>
          Contact
        </Link>
      </ul>
    </nav>
  );
};
export default SideBar;

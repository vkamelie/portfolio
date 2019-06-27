import React from "react";
import "./SkillsIcons.css";

const Icons = () => {
  return (
    <div className="icons-main">
      <h2>Technical Skills</h2>
      <div className="skills">
        <div className="fe">
          <h3>Front-End</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML </li>
            <li>CSS </li>
            <li>Redux</li>
          </ul>
        </div>
        <div>
          <h3>Back-End</h3>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Icons;

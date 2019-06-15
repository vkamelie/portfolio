import React from "react";
import Transplant from "./TransplantProject.png";
import GitHub from "./GitHub-Mark-Light-32px.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-main">
      Projects
      <div>
        <h1>Transplant Community Support</h1>
        <h2>
          A personal project created durning my time at DevMoutian. It is fourm
          and chat app specifly for the transplant community.
        </h2>
        <img src={Transplant} alt="Transplant Support Project" />
        <a href="https://github.com/vkamelie/Support">
          <img src={GitHub} alt="GitHub logo" />
        </a>
      </div>
    </div>
  );
};

export default Projects;

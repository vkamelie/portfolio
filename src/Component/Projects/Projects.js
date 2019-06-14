import React from "react";
import Transplant from "./TransplantProject.png";
import GitHub from "./GitHub-Mark-Light-32px.png";

const Projects = () => {
  return (
    <div>
      Projects
      <div>
        <header>Transplant Community Support</header>
        <p>
          A personal project created durning my time at DevMoutian. It is fourm
          and chat app specifly for the transplant community.
        </p>
        <img src={Transplant} alt="Transplant Support Project" />

        <a href="https://github.com/vkamelie/Support">
          <img src={GitHub} alt="GitHub logo" />
        </a>
      </div>
      <div>
        <header />
        <p />
      </div>
    </div>
  );
};

export default Projects;

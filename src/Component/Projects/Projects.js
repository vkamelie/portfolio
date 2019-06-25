import React, { useState } from "react";
//import Transplant from "./TransplantProject.png";
// import GitHub from "./GitHub-Mark-Light-32px.png";
import "./Projects.css";
import SkillsIcons from "./SkillsIcons";
import TransplantModal from "./TransplantModal";
import BackDrop from "../SideBar/BackDrop";

const Projects = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(() => {
      return { show: true };
    });
  };

  const hideModal = () => {
    setShow(!show);
  };

  const onRequestClose = () => {
    setShow({ show: false });
  };

  let backdrop;
  if (show) {
    backdrop = <BackDrop onRequestClose={onRequestClose} />;
  }

  return (
    <div className="projects-main">
      <SkillsIcons />
      <h2>Projects</h2>
      <div className="modal-box">
        <span className="bold">Transplant Community Support</span>

        <div>
          <br />
          Technologies:{" "}
          <span className="bold">
            React, Redux, Node.js, Express, Postgresql, Stripe, Socket.io,
            RESTful API's, CSS3, HTML5{" "}
          </span>
          <br />
          <TransplantModal show={show} hideModal={hideModal} />
          <button id="modalBtn" onClick={showModal}>
            See Details
          </button>
        </div>
      </div>
      {backdrop}
    </div>
  );
};

export default Projects;

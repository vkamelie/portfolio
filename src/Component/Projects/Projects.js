import React, { useState } from "react";
//import Transplant from "./TransplantProject.png";
// import GitHub from "./GitHub-Mark-Light-32px.png";
import "./Projects.css";
import SkillsIcons from "./SkillsIcons";
import TransplantModal from "./TransplantModal";
import BackDrop from "../SideBar/BackDrop";
import DevModal from "../Projects/Dev/DevModal";

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

  ///dev modal functions

  const [showDev, setShowDev] = useState(false);

  const showModalDev = () => {
    setShowDev(() => {
      return { showDev: true };
    });
  };

  const hideModalDev = () => {
    setShowDev(!showDev);
  };

  const onRequestCloseDev = () => {
    setShowDev({ showDev: false });
  };

  let backdropDev;
  if (showDev) {
    backdropDev = <BackDrop onRequestCloseDev={onRequestCloseDev} />;
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
            React, Redux, Node, Express, Postgresql, Stripe, Socket.io, RESTful
            API's, CSS 3, HTML 5{" "}
          </span>
          <div className="modalbtn">
            <button id="modalBtn" onClick={showModal}>
              See Details
            </button>
          </div>
          <br />
          <TransplantModal show={show} hideModal={hideModal} />
        </div>
      </div>
      {backdrop}
      <div className="modal-box">
        <span className="bold">DevDispatch</span>

        <div>
          <br />
          Technologies:{" "}
          <span className="bold">
            React, Node, Express, Postgresql, SQL, RESTful API's, CSS 3, HTML 5,
            Auth0{" "}
          </span>
          <div className="modalbtn">
            <button id="modalBtn" onClick={showModalDev}>
              See Details
            </button>
          </div>
          <br />
          <DevModal showDev={showDev} hideModalDev={hideModalDev} />
        </div>
      </div>
      {backdropDev}
    </div>
  );
};

export default Projects;

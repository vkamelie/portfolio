import React from "react";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="projects">
        <Projects />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Home;

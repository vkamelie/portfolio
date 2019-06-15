import React from "react";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import "./Home.css";
import About from "../About/About";

function Home() {
  return (
    <div className="home-container">
      <div className="projects-home">
        <Projects />
      </div>
      <div className="info-home">
        <Contact />
        <About />
      </div>
    </div>
  );
}

export default Home;

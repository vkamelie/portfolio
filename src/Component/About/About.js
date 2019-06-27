import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className="about-main">
      <span
        style={{ textDecoration: "underLine", textDecorationColor: "coral" }}
      >
        How my personality makes me a great programmer.
      </span>
      <div className="list">
        <ol>
          <li>I've never met a dog I couldn't win over.</li>
          <ul>
            <li>
              Displays the ability to get along with all types of personalities.
            </li>
          </ul>
          <br />
          <li>
            Like to travel and immersive myself in cultures other than my own.
          </li>
          <ul>
            <li>I'm always interested in learning and trying something new.</li>
          </ul>
          <br />
          <li>My hobbies include crafts and making miniature houses.</li>

          <ul>
            <li>This show my patiences and my attention to detail.</li>
          </ul>
        </ol>
      </div>
    </div>
  );
};

export default About;

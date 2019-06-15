import React from "react";
import Dog from "./IMG_6978.JPG";
import "./About.css";
import Hike from "./IMG_0382.JPG";
import Craft from "./IMG_2866.JPG";

const About = () => {
  return (
    <div className="about-main">
      <h4>
        Here are examples on why my personality makes me a great programmer.
      </h4>
      <ul>
        <li>
          I've never met a dog I could not win over. This displays compassion,
          empthay and the ablity to get along with all types of personality.{" "}
          <img id="dog" src={Dog} alt="Enjoying the sun with a a dog." />
        </li>
        <li>
          I love to seek adventures and travel. Experince culutres other than my
          own. This dispays the williness to always be seeking and learning new
          things. <img id="hike" src={Hike} alt="Me on a hike." />
        </li>
        <li>
          My hobbies include making minture models. This displays patinces,
          creativity and attetnion to deital.{" "}
          <img id="craft" src={Craft} alt="minture craft room" />{" "}
        </li>
      </ul>
    </div>
  );
};

export default About;

import React from "react";
import tp1 from "./Tp1.png";
import tp2 from "./Tp2.png";
import tp3 from "./Tp3.png";
import tp4 from "./Tp4.png";

import "./Slider.css";

const Slider = () => {
  return (
    <div className="slide">
      <div className="container">
        <input type="radio" id="i1" name="images" defaultChecked />
        <input type="radio" id="i2" name="images" />
        <input type="radio" id="i3" name="images" />
        <input type="radio" id="i4" name="images" />
        <input type="radio" id="i5" name="images" />

        <div className="slide_img" id="one">
          <img src={tp1} alt="home page" />

          <label className="prev" htmlFor="i5">
            <span>&#x2039;</span>
          </label>
          <label className="next" htmlFor="i2">
            <span>&#x203a;</span>
          </label>
        </div>

        <div className="slide_img" id="two">
          <img src={tp2} alt="forum page" />

          <label className="prev" htmlFor="i1">
            <span>&#x2039;</span>
          </label>
          <label className="next" htmlFor="i3">
            <span>&#x203a;</span>
          </label>
        </div>

        <div className="slide_img" id="three">
          <img src={tp3} alt="login page" />

          <label className="prev" htmlFor="i2">
            <span>&#x2039;</span>
          </label>
          <label className="next" htmlFor="i4">
            <span>&#x203a;</span>
          </label>
        </div>

        <div className="slide_img" id="four">
          <img src={tp4} alt="resource page" />

          <label className="prev" htmlFor="i3">
            <span>&#x2039;</span>
          </label>
        </div>

        <div id="nav_slide">
          <label htmlFor="i1" className="dots" id="dot1" />
          <label htmlFor="i2" className="dots" id="dot2" />
          <label htmlFor="i3" className="dots" id="dot3" />
          <label htmlFor="i4" className="dots" id="dot4" />
        </div>
      </div>
      <div className="des">
        Description: A community forum and chat app for the transplant
        community.
      </div>
    </div>
  );
};
export default Slider;

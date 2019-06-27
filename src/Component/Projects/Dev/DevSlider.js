import React from "react";
import dd6 from "./DD1.png";
import dd7 from "./DD2.png";
import dd8 from "./DD3.png";
import dd9 from "./DD4.png";

import "./DevSlider.css";

const DevSlider = () => {
  return (
    <div className="slide2">
      <div className="container2">
        <input type="radio" id="i6" name="images" defaultChecked />
        <input type="radio" id="i7" name="images" />
        <input type="radio" id="i8" name="images" />
        <input type="radio" id="i9" name="images" />

        <div className="slide_img2" id="six">
          <img src={dd6} alt="home page" />

          <label className="prev2" htmlFor="i5">
            <span>&#x2039;</span>
          </label>
          <label className="next2" htmlFor="i7">
            <span>&#x203a;</span>
          </label>
        </div>

        <div className="slide_img2" id="seven">
          <img src={dd7} alt="forum page" />

          <label className="prev2" htmlFor="i6">
            <span>&#x2039;</span>
          </label>
          <label className="next2" htmlFor="i8">
            <span>&#x203a;</span>
          </label>
        </div>

        <div className="slide_img2" id="eight">
          <img src={dd8} alt="login page" />

          <label className="prev2" htmlFor="i7">
            <span>&#x2039;</span>
          </label>
          <label className="next2" htmlFor="i4">
            <span>&#x203a;</span>
          </label>
        </div>

        <div className="slide_img2" id="nine">
          <img src={dd9} alt="none yet" />

          <label className="prev2" htmlFor="i8">
            <span>&#x2039;</span>
          </label>
        </div>

        <div id="nav_slide2">
          <label htmlFor="i6" className="dots2" id="dot6" />
          <label htmlFor="i7" className="dots2" id="dot7" />
          <label htmlFor="i8" className="dots2" id="dot8" />
          <label htmlFor="i9" className="dots2" id="dot9" />
        </div>
      </div>
      <div className="des">
        Description: A coding bootcamp directory. That allows you to research
        and review coding bootcamps through linkedIn verification.
      </div>
    </div>
  );
};
export default DevSlider;

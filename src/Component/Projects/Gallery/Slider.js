import React from "react";
import tp1 from "./Tp1.png";
import tp2 from "./Tp2.png";
import tp3 from "./Tp3.png";

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

          <label className="prev" for="i5">
            <span>&#x2039;</span>
          </label>
          <label className="next" for="i2">
            <span>&#x203a;</span>
          </label>
        </div>

        <div className="slide_img" id="two">
          <img src={tp2} alt="forum page" />

          <label className="prev" for="i1">
            <span>&#x2039;</span>
          </label>
          <label className="next" for="i3">
            <span>&#x203a;</span>
          </label>
        </div>

        <div className="slide_img" id="three">
          <img src={tp3} alt="login page" />

          <label className="prev" for="i2">
            <span>&#x2039;</span>
          </label>
          <label className="next" for="i4">
            <span>&#x203a;</span>
          </label>
        </div>

        <div className="slide_img" id="four">
          <img
            src="http://wallpaperswide.com/download/big_hero_6_baymax-wallpaper-1152x720.jpg"
            alt="none yet"
          />

          <label className="prev" for="i3">
            <span>&#x2039;</span>
          </label>
          <label className="next" for="i5">
            <span>&#x203a;</span>
          </label>
        </div>

        <div className="slide_img" id="five">
          <img
            src="http://www.wallpapereast.com/static/images/toys-wallpaper-hd-16339-17046-hd-wallpapers.jpg"
            alt="none yet"
          />

          <label className="prev" for="i4">
            <span>&#x2039;</span>
          </label>
          <label className="next" for="i1">
            <span>&#x203a;</span>
          </label>
        </div>

        <div id="nav_slide">
          <label for="i1" className="dots" id="dot1" />
          <label for="i2" className="dots" id="dot2" />
          <label for="i3" className="dots" id="dot3" />
          <label for="i4" className="dots" id="dot4" />
          <label for="i5" className="dots" id="dot5" />
        </div>
      </div>
      <div>
        Description: A community forum and chat app for the transplant
        community.
      </div>
    </div>
  );
};
export default Slider;

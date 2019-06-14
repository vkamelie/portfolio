import React from "react";
import "./Toggle.css";
const Toggle = props => {
  return (
    <button className="toggle_button" onClick={props.click}>
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </button>
  );
};

export default Toggle;

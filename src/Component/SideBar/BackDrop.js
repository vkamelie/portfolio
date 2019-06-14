import React from "react";
import "./BackDrop.css";

const Backdrop = props => {
  console.log(props, "backdrop close");
  return <div className="backdrop" onClick={props.backDropClick} />;
};

export default Backdrop;

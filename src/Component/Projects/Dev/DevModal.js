import React from "react";
import "./Modal2.css";
import DevSlider from "./DevSlider";

const DevModal = props => {
  console.log(props);

  let modalClasses2 = ["modal display-none2"];
  if (props.showDev) {
    modalClasses2 = "modal2 ";
  }

  return (
    <div className={modalClasses2}>
      <div className="modal-main2">
        <span className="close2" onClick={props.hideModalDev}>
          &times;
        </span>
        <DevSlider />
        <button onClick={props.hideModalDev}>Close</button>
      </div>
    </div>
  );
};
export default DevModal;

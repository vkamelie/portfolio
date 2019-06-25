import React from "react";
import "./Modals.css";
import Slider from "./Gallery/Slider";

const Modal = props => {
  console.log(props);

  let modalClasses = ["modal display-none"];
  if (props.show) {
    modalClasses = "modal ";
  }

  return (
    <div className={modalClasses}>
      <div className="modal-main">
        <span className="close" onClick={props.hideModal}>
          &times;
        </span>
        <Slider />
        <button onClick={props.hideModal}>Close</button>
      </div>
    </div>
  );
};
export default Modal;

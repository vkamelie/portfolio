import React from "react";
import "./Modals.css";

const TransplantModal = props => {
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
        <p>
          Transplant Project here
          <br />
          Description <br /> PHOTOS <br />
          Changllegs
        </p>

        <button onClick={props.hideModal}>Close</button>
      </div>
    </div>
  );
};
export default TransplantModal;

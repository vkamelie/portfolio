import React, { useState } from "react";
import NavBar from "./Component/NavBar/NavBar";
import SideBar from "./Component/SideBar/SideBar";
import Backdrop from "./Component/SideBar/BackDrop";

import Routes from "./routes";
import "./App.css";

function App() {
  const [sideBarOpen, setSideBar] = useState(false);

  const toggleClick = () => {
    setSideBar(() => {
      return { sideBarOpen: !sideBarOpen };
    });
  };

  const backDropClick = () => {
    setSideBar(!sideBarOpen);
  };
  let sideBar;
  let backdrop;
  if (sideBarOpen) {
    sideBar = <SideBar linkClick={backDropClick} show={sideBarOpen} />;
    backdrop = <Backdrop backDropClick={backDropClick} />;
  }

  return (
    <div className="App">
      <NavBar sideBarClickHander={toggleClick} />
      {sideBar}
      {backdrop}

      {Routes}
    </div>
  );
}

export default App;

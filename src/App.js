import React from "react";
import NavBar from "./Component/NavBar/NavBar";

import Routes from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      {Routes}
    </div>
  );
}

export default App;

import React, { Component } from "react";
import "./App.css";

import Overlay from "./components/Overlay";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        {/* <Overlay /> */}
      </div>
    );
  }
}

export default App;

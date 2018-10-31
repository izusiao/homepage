import React, { Component } from "react";
import "./App.css";

import Overlay from "./components/Overlay";
import Home from "./components/Home";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        {/* <Overlay /> */}
      </div>
    );
  }
}

export default App;

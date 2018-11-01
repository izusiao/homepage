import React, { Component } from "react";
import "./App.css";

import Overlay from "./components/Overlay";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
        {/* <Overlay /> */}
      </div>
    );
  }
}

export default App;

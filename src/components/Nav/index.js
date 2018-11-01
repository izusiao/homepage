import React from "react";
import NavItem from "./NavItem";
import './Nav.css';
import styled from 'styled-components';

const Icon = styled.i`
    color: #fff
`

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ zIndex: "10" }}>
      <a className="navbar-brand" href="#">
        Izabela Ozga
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ zIndex: "20" }}
      >
        <Icon className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
            <NavItem title="Home" href="#" />
            <NavItem title="About me" href="#about" />
            <NavItem title="Projects" href="#projects" />
            <NavItem title="Contact" href="#contact" />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

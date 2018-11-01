import React from "react";
import "./Home.css";
import styled from "styled-components";

const H1 = styled.h1`
  color: white !important;
  font-size: 5em;
  font-weight: 700;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0 !important;
  padding-top: .5em;
  @media only screen and (min-width: 768px) {
    font-size: 8em;
  }
`;

const Home = () => {
  return (
    <div className="container" id="#">
    <div className="bg">
      {/* <div className="layer1">
        <H1>Portfolio</H1>
      </div>
      <div className="layer2" /> */}
      <div className="content"><H1>Portfolio</H1></div>
      </div>
    </div>
  );
};

export default Home;

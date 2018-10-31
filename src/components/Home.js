import React from "react";
import "./Home.css";
import styled from "styled-components";

const H1 = styled.h1`
  color: white;
  font-size: 5em;
  font-weight: 700;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20%;
  @media only screen and (min-width: 768px) {
    font-size: 8em;
  }
`;

const Home = () => {
  return (
    <div className="home bg">
      {/* <div className="layer1">
        <H1>Portfolio</H1>
      </div>
      <div className="layer2" /> */}
      <div className="content"><H1>Portfolio</H1></div>
    </div>
  );
};

export default Home;

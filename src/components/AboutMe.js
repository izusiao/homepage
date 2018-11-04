import React from "react";
import styled from "styled-components";
import "./Home.css";
import img from "../img/ozga-izabela.jpg";

const Side = styled.div`
  align-self: stretch;
  background-color: ${props => (props.white ? "white" : "rgb(45, 67, 102)")};
  padding-top: 40px;
  @media only screen and (min-width: 768px) {
    flex: 0 1 50%;
    padding-top: 60px;
  }
`;
const Paragraph = styled.div`
  text-align: justify;
  margin: 1em;
  font-size: 1.2em
  @media only screen and (min-width: 768px) {
    flex: 0 1 50%;
    margin: 3em;
  }
`;

const Img = styled.img`
    max-width: 100%;
`

const AboutMe = () => {
  return (
    <div
      className="container"
      id="about"
      style={{ backgroundColor: "rgba(45, 67, 102, .2)" }}
    >
      <div className="content" style={{ paddingTop: "0", flexWrap: "wrap" }}>
        <Side white>
            <Img src={img} alt="" />
        </Side>
        <Side white>
          <h1>About me</h1>
          <Paragraph>
            <p>
              My name is <b>Izabela</b>. I'm 29, come from Poland. In 2013 I
              graduated from <b>Wroclaw University of Science and Technology</b>{" "}
              with the <b>master's degree</b> in electrical engineering. Since
              my graduation I've worked in automation branch. For three years
              I've been living in Germany.
            </p>
            <p>
              Some time ago I decided to find the right way and changing my
              life. I've started to learn <b>programming</b> by myself.
            </p>
            <p>
              <b>Frontend</b> was my choice, because I love designing, drawing
              and creating.
            </p>
            <p>
              In my free time I learn <b>ReactJS</b> from tutorials and create
              small projects. It makes me so much fun. I want to do it
              professional.
            </p>
          </Paragraph>
        </Side>
      </div>
    </div>
  );
};

export default AboutMe;

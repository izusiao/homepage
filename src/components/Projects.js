import React from "react";
import styled from "styled-components";
import './Home.css';
import ProjectItem from "./ProjectItem";
import items from '../projectItems.json';

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
`

const Projects = () => {
  return (
    <div className="container" style={{ backgroundColor: "rgb(45, 67, 102)" }} id="projects">
      <div className="content" style={{ height: "100% !important", flexDirection: "column" }}>
        <h1 style={{ color: "white", marginBottom: "1em" }}>Projects</h1>
        <Items>
          {items.map(item => <ProjectItem src={item.src} title={item.title} description={item.description} key={item.id} />)}
        </Items>
      </div>
    </div>
  );
};

export default Projects;

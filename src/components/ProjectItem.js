import React from 'react';
import styled from 'styled-components';

const DivBack = styled.div`
    background-color: white;
    color: rgb(45, 67, 102);
    @media only screen and (min-width: 768px) {
        flex: 0 1 30%;
        margin: 10px;
      }
    margin: 0 0 3em 0;
`
const Img = styled.img`
    max-width: 100%;
`

const ProjectItem = props => {
    const {src, title, description} = props;
    console.log(src)
    return (
        <DivBack>
            <Img src={require(`img/${src}`)} alt="" />
            <div>
                <h3>{title}</h3>
                <hr />
                <p style={{ padding: "0 1em 0 1em"}}>{description}</p>
            </div>
        </DivBack>
    )
}

export default ProjectItem;
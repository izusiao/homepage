import React from "react";
import { connect } from "react-redux";

const Overlay = props => (
  <div>
    <button onClick={props.languageChoiceEng}>Eng</button>
    <button onClick={props.languageChoicePl}>Pl</button>
    Hello
  </div>
);

const mapDispatchToProps = dispatch => {
    return {
        languageChoiceEng: () => dispatch({type: "ENG"}),
        languageChoicePl: () => dispatch({type: "PL"})
    }
};

export default connect(
  null,
  mapDispatchToProps
)(Overlay);

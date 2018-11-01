import React from "react";
import './NavItem.css';

const NavItem = props => {
  return (
    <li>
      <a href={props.href}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {props.title}
      </a>
    </li>
  );
};

export default NavItem;

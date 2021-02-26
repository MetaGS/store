import React from "react";
import { NavLink } from "react-router-dom";
import DescriptionP from "./DescriptionP";
import PropTypes from "prop-types";

import { GrCircleQuestion as AiOutlineQuestion } from "react-icons/gr";

import SignButtons from "./SignButtons";
import "./Sidebar.css";
const Sidebar = (props) => {
  return (
    <div className="sidebar-comp">
      <SignButtons className="sidebar-sign" />
      <ul className="sidebar-links">
        <li className="sidebar-link">
          <NavLink to="/products">Collections</NavLink>
        </li>
        <li className="sidebar-link">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="sidebar-link">
          <NavLink to="/how-to-order">How To Order</NavLink>
        </li>
        <li className="sidebar-link">
          <NavLink to="/products">Kids</NavLink>
        </li>
      </ul>

      <div className="sidebar-desc">
        <DescriptionP className="desc-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
          blanditiis saepe fugit eos, optio accusantium quaerat maxime sint in
          maiores rerum harum explicabo rem ut?
        </DescriptionP>
      </div>
      <div className="sidebar-utils">
        <button>
          <NavLink to="/contact-us">
            <AiOutlineQuestion className="sidebar-icon-question" />
            Help
          </NavLink>
        </button>
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;

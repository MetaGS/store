import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./SignButtons.css";
const SignButtons = ({ className = "" }) => {
  return (
    <div className={`signin-signup ${className}`}>
      <button className="btn sm">
        <NavLink to="/signup">SignUp</NavLink>
      </button>
      <button className="btn sm">
        <NavLink to="/signin">Sign in</NavLink>
      </button>
    </div>
  );
};

SignButtons.propTypes = {};

export default SignButtons;

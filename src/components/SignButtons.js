import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./SignButtons.css";
import Button from "./Button";
const SignButtons = ({ className = "" }) => {
  return (
    <div className={`signin-signup ${className}`}>
      <Button type="primary-button sm">
        <NavLink to="/signup">SignUp</NavLink>
      </Button>
      <Button type="primary-button sm">
        <NavLink to="/signin">Sign in</NavLink>
      </Button>
    </div>
  );
};

SignButtons.propTypes = {};

export default SignButtons;

import React from "react";
import PropTypes from "prop-types";

import "./HeaderTitle.css";
const HeaderTitle = ({ children, className = "" }) => {
  return <div className={`header ${className}`}>{children}</div>;
};

HeaderTitle.propTypes = {};

export default HeaderTitle;

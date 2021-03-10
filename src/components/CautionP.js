import React from "react";
import PropTypes from "prop-types";

import "./CautionP.css";
const CautionP = ({ children, text, className = "", ...props }) => {
  return (
    <p {...props} className={`__caution-p ${className}`}>
      {(text, children)}
    </p>
  );
};

CautionP.propTypes = {};

export default CautionP;

import React from "react";
import PropTypes from "prop-types";

import "./TitleAbhaya.css";

const TitleAbhaya = ({
  text,
  fontSize = "",
  extraClasses = "",
  children,
  className,
}) => {
  return (
    <h2
      className={`title-abhaya ${extraClasses} ${className}`}
      style={{ fontSize: fontSize }}
    >
      {text ? text : children}
    </h2>
  );
};

TitleAbhaya.propTypes = {};

export default TitleAbhaya;

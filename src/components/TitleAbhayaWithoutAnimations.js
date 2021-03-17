import React from "react";
import PropTypes from "prop-types";

import "./TitleAbhayaWithoutAnimations.css";

const TitleAbhaya = ({
  text,
  fontSize = "",
  extraClasses = "",
  children,
  className = "",
}) => {
  return (
    <h2
      className={`title-abhaya__no-anim ${extraClasses} ${className}`}
      style={{ fontSize: fontSize }}
    >
      {text ? text : children}
    </h2>
  );
};

TitleAbhaya.propTypes = {};

export default TitleAbhaya;

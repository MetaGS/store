import React, { useState } from "react";
import PropTypes from "prop-types";

import "./JobIcon.css";
const JobIcon = ({ Icon, placeholder }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const onHoverInOut = ({ target }) => {
    setShowPlaceholder(!showPlaceholder);
  };

  return (
    <li
      className="job-icon"
      aria-label={placeholder}
      onMouseOver={onHoverInOut}
      onMouseOut={onHoverInOut}
    >
      {<Icon />}
      {showPlaceholder && (
        <div className="job-icon-explanation">{placeholder}</div>
      )}
    </li>
  );
};

JobIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default JobIcon;

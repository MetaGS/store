import React from "react";
import PropTypes from "prop-types";

import "./InlineError.css";

const InlineError = (props) => {
  return (
    <>
      <p
        className={`inline-error ${props.className} ${
          props.error ? "active" : ""
        }`}
      >
        {props.error}
      </p>
    </>
  );
};

InlineError.propTypes = {};

export default InlineError;

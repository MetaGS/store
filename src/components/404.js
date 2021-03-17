import React from "react";
import PropTypes from "prop-types";

import "./404.css";

const ErrorPage = (props) => {
  return (
    <div className="error-page">
      <h1 className="error-page__title"> 404</h1>
      <h2 className="error-page__subtitle">Page Not Found.</h2>
      <p className="error-page__description">
        We're sorry, the page you are looking for cannot be found.
      </p>
    </div>
  );
};

ErrorPage.propTypes = {};

export default ErrorPage;

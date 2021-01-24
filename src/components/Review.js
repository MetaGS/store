import React from "react";
import PropTypes from "prop-types";

import star from "../assets/star.svg";
import Star from "../assets/Star";

import "./Review.css";

const Review = (props) => {
  return (
    <div className="review">
      <div className="author-and-date">
        <div className="author-block">
          <p className="author"> John Doe</p>
          <time>yesterday</time>
        </div>
        <div className="rate">
          {[1, 2, 3, 4, 5].map((ar, index) => {
            return <span key={index}>{Star("var(--primary-color)")}</span>;
          })}
        </div>
      </div>
      <div className="review-text">
        <p>
          Shimpressive shoes goes here descrirption bla bla lorem ipsum on the
          board
        </p>
      </div>
    </div>
  );
};

Review.propTypes = {};

export default Review;

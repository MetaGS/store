import React from "react";
import PropTypes from "prop-types";
import dateFormat from "dateformat";

import star from "../assets/star.svg";
import Star from "../assets/Star";

import "./Review.css";

const Review = ({ data }) => {
  const time = data?.createdAt
    ? parseDate(data.createdAt.seconds)
    : "updating...";
  console.log(data);
  return (
    <div className="review">
      <div className="author-and-date">
        <div className="author-block">
          <p className="author"> {data.userId}</p>
          <time className="review-time">{time}</time>
        </div>
        <div className="rate">
          {Array(+data.rate)
            .fill("star")
            .map((ar, index) => {
              return <span key={index}>{Star("var(--primary-color)")}</span>;
            })}
        </div>
      </div>
      <div className="review-text">
        <p>{data.text}</p>
      </div>
    </div>
  );
};

Review.propTypes = {};

export default Review;

function parseDate(seconds) {
  const time = new Date(null);
  time.setSeconds(seconds);
  console.log(time.getFullYear());
  return dateFormat(time, "fullDate");
}

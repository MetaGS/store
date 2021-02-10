import React from "react";
import PropTypes from "prop-types";

import WriteReview from "./WriteReview";
import Review from "./Review";

import "./Reviews.css";

const Reveiws = ({ reviews = [] }) => {
  console.log(reviews);
  return (
    <>
      {reviews.map((review) => {
        return <Review data={review} key={review.id} />;
      })}
    </>
  );
};

Reveiws.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export default Reveiws;

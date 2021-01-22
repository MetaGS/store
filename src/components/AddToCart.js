import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";
import "./AddToCart.css";

const AddToCart = (props) => {
  return (
    <Button
      type="big primary-button rounded"
      className={"addToCart-button"}
      text="add to cart"
    />
  );
};

AddToCart.propTypes = {};

export default AddToCart;

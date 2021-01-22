import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "./Button";
import "./AddToCart.css";

import useStorage from "../storage";

const AddToCart = ({ productId }) => {
  const [state, dispatch] = useStorage();
  const alreadyInCart = state.cart.includes(productId);

  return (
    !alreadyInCart && (
      <Button
        type="big primary-button rounded"
        className={"addToCart-button"}
        text="add to cart"
      />
    )
  );
};

AddToCart.propTypes = {};

export default AddToCart;

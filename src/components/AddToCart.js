import React, { useState } from "react";
import PropTypes from "prop-types";
import sha256 from "sha256";

import Button from "./Button";
import "./AddToCart.css";

import useStorage from "../storage";
import createCartOrderObject from "../utils/createCartOrderObject";
import { addToCartAction } from "../storage/actions";
import { addToField as addToCartDb } from "../firebase/db";
import useControlField from "../hooks/useControlField";
import useControlCart from "../hooks/useControlCart";

const AddToCart = ({ productId, color, size, setErrors, product }) => {
  const [state, dispatch] = useStorage();
  const controlCartUpdgrade = useControlCart("cartOrders");
  // const controlCart = useControlField("cart");
  //лучше если все же можно добавить в корзинку без логина но, когда order нажимаешь он направляет в signup signin

  const cartOrder = createCartOrderObject({
    ...product,
    productId,
    color,
    size,
  });
  const alreadyInCart = controlCartUpdgrade.includes(cartOrder);

  const onAddToCart = (e) => {
    if (color && size) {
      // controlCart.addToField(productId);

      console.log(cartOrder);
      controlCartUpdgrade.addToField(cartOrder);
    } else {
      const errors = {};
      color || (errors.color = "choose color");
      size || (errors.size = "choose size");
      setErrors(errors);
      setTimeout(() => {
        setErrors({});
      }, 5000);
    }
  };

  return (
    <Button
      type="big primary-button "
      className={"addToCart-button"}
      text="add to cart"
      onClick={onAddToCart}
      disabled={alreadyInCart}
    />
  );
};

AddToCart.propTypes = {};

export default AddToCart;

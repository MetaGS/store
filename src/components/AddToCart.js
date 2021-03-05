import React, { useState } from "react";
import PropTypes from "prop-types";
import sha256 from "sha256";

import Button from "./Button";
import "./AddToCart.css";

import useStorage from "../storage";
import { addToCartAction } from "../storage/actions";
import { addToField as addToCartDb } from "../firebase/db";
import useControlField from "../hooks/useControlField";
import useControlCart from "../hooks/useControlCart";

const AddToCart = ({ productId, color, size, setErrors, product }) => {
  const [state, dispatch] = useStorage();
  const controlCart = useControlField("cart");
  const controlCartUpdgrade = useControlCart("cartOrder");
  const alreadyInCart = state.cart.includes(productId);
  //лучше если все же можно добавить в корзинку без логина но, когда order нажимаешь он направляет в signup signin
  const onAddToCart = (e) => {
    if (color && size) {
      // controlCart.addToField(productId);
      const cartOrder = {
        cartOrderId: sha256(productId + String(color) + String(size)),
        productId,
        color,
        size,
        title: product?.title,
        image: product?.photoUrls?.[0] ?? "https://via.placeholder.com/800",
        price: product?.price ?? 0,
      };
      console.log(cartOrder);
      controlCartUpdgrade(cartOrder);
    } else {
      console.log(color, size);
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

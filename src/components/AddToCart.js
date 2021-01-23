import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "./Button";
import "./AddToCart.css";

import useStorage from "../storage";
import { addToCartDispatch } from "../storage/actions";
import { addToCart as addToCartDb } from "../firebase/db";

const AddToCart = ({ productId }) => {
  const [state, dispatch] = useStorage();
  const alreadyInCart = state.cart.includes(productId);
  //лучше если все же можно добавить в корзинку без логина но, когда order нажимаешь он направляет в signup signin
  const onAddToCart = (e) => {
    console.log("add to cart click");
    if (state.userSignedIn) {
      addToCartDb(productId, state.user.uid)
        .then((doc) => {
          dispatch(addToCartDispatch([productId]));
        })
        .catch((error) => {
          console.log("%cError", "font-size: 1.2rem; color: red");
          console.log(error.message);
        });
    }
  };

  return (
    <Button
      type="big primary-button rounded"
      className={"addToCart-button"}
      text="add to cart"
      onClick={onAddToCart}
      disabled={alreadyInCart || !state.userSignedIn}
    />
  );
};

AddToCart.propTypes = {};

export default AddToCart;

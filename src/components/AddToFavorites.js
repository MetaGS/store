import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "./Button";
import "./AddToFavorites.css";

import useStorage from "../storage";
import { addToFavoritesAction } from "../storage/actions";
import { addToField as addToFavoritesDb } from "../firebase/db";

// Unify addFavorites and AddToCart
const AddToFavorites = ({ productId }) => {
  const [state, dispatch] = useStorage();
  const alreadyInFavorites = state.favorites.includes(productId);
  //лучше если все же можно добавить в корзинку без логина но, когда order нажимаешь он направляет в signup signin
  const onAddToFavorites = (e) => {
    if (state.userSignedIn) {
      addToFavoritesDb(productId, state.user.uid, "favorites")
        .then((doc) => {
          dispatch(addToFavoritesAction([productId]));
        })
        .catch((error) => {});
    }
  };

  return (
    <Button
      type="big secondary rounded"
      text="add to Favorites"
      disabled={alreadyInFavorites || !state.userSignedIn}
      onClick={onAddToFavorites}
    />
  );
};

AddToFavorites.propTypes = {};

export default AddToFavorites;

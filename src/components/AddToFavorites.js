import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "./Button";
import "./AddToFavorites.css";

import useStorage from "../storage";
import useControlField from "../hooks/useControlField";
import { addToFavoritesAction } from "../storage/actions";
import { addToField as addToFavoritesDb } from "../firebase/db";

// Unify addFavorites and AddToCart
const AddToFavorites = ({ productId }) => {
  const controlFavorites = useControlField("favorites");
  controlFavorites.showMeOwnState?.();
  const [state, dispatch] = useStorage();
  const alreadyIncludes = controlFavorites?.includes?.(productId);
  //лучше если все же можно добавить в корзинку без логина но, когда order нажимаешь он направляет в signup signin
  const onAddToFavorites = (e) => {
    // if (state.userSignedIn) {
    //   addToFavoritesDb(productId, state.user.uid, "favorites")
    //     .then((doc) => {
    //       dispatch(addToFavoritesAction([productId]));
    //     })

    // }
    controlFavorites.addToField(productId);
  };

  return (
    <Button
      type="big secondary rounded"
      text="add to Favorites"
      disabled={alreadyIncludes}
      onClick={onAddToFavorites}
    />
  );
};

AddToFavorites.propTypes = {};

export default AddToFavorites;

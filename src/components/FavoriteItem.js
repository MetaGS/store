import React, { useState } from "react";
import PropTypes from "prop-types";

import useStorage from "../storage";
import { addToField } from "../firebase/db";
import { removeFromField } from "../firebase/db";

import Product from "./Product";
import { Gold } from "../assets/Star";
import "./FavoriteItem.css";
import {
  addToFavoritesAction,
  removeFromFavoritesAction,
} from "../storage/actions";

const FavoriteItem = ({ itemData }) => {
  const [isFavorite, setIsFavorite] = useState(true);
  const [state, dispatch] = useStorage();

  const onFavoriteClick = async (e) => {
    let response;
    if (isFavorite) {
      await onRemoveFromFavorites();
      dispatch(removeFromFavoritesAction(itemData.id));
    } else {
      await onAddToFavorites();
      dispatch(addToFavoritesAction([itemData.id]));
    }

    setIsFavorite(!isFavorite);
  };

  const onAddToFavorites = () => {
    return addToField(itemData.id, state.user.uid, "favorites");
  };

  const onRemoveFromFavorites = () => {
    return removeFromField(itemData.id, state.user.uid, "favorites");
  };

  return (
    <div className="favorite-item">
      <Product mobile className="favorite-product" product={itemData} />
      <div
        className="favorites-star"
        style={{ backgroundColor: `${isFavorite ? "yellow" : "grey"}` }}
        onClick={onFavoriteClick}
      >
        <div className="favorites-star-icon">{Gold(isFavorite)}</div>
      </div>
    </div>
  );
};
FavoriteItem.propTypes = {};

export default FavoriteItem;

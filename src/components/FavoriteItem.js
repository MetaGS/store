import React, { useState } from "react";
import PropTypes from "prop-types";

import useControlField from "../hooks/useControlField";

import Product from "./Product";
import { Gold } from "../assets/Star";
import "./FavoriteItem.css";

const FavoriteItem = ({ itemData, removeItem }) => {
  console.log(itemData);
  const [isFavorite, setIsFavorite] = useState(true);

  const { removeFromField = () => {} } = useControlField("favorites");

  return (
    <div className="favorite-item">
      <Product mobile className="favorite-product" product={itemData} />
      <div
        className="favorites-star"
        style={{ backgroundColor: `${isFavorite ? "yellow" : "grey"}` }}
        onClick={() => {
          removeFromField(itemData.id);
        }}
      >
        <div className="favorites-star-icon">{Gold(isFavorite)}</div>
      </div>
    </div>
  );
};
FavoriteItem.propTypes = {};

export default FavoriteItem;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import useGetProductsByFieldName from "../hooks/useGetProductsByFieldName";
import useControlField from "../hooks/useControlField";
import useStorage from "../storage";

import Container from "../components/Container";
import UtilsBlock from "../components/UtilsBlock";
import TitleAbhaya from "../components/TitleAbhaya";
import DescriptionP from "../components/DescriptionP";
import FavoriteItem from "../components/FavoriteItem";

import "./FavoritesPage.css";
const FavoritesPage = (props) => {
  const [state, dispatch] = useStorage();
  console.log(state);

  const controlFavorites = useControlField("favorites");
  const productList = controlFavorites.productsByField;

  console.log("hi");
  console.log(productList);
  controlFavorites.showMeOwnState?.();

  return (
    <Container>
      <section className="favorites-page">
        <button
          onClick={() => {
            console.log(productList);
          }}
        >
          show control
        </button>
        <UtilsBlock className={"favorites-utils"} />
        <TitleAbhaya text={"Favorite"} />
        <DescriptionP fontSize="2.1rem" text={`Your Favorited Products`} />

        <div className="favorite-items">
          {productList.map((favoriteItem) => {
            return (
              <FavoriteItem key={favoriteItem.id} itemData={favoriteItem} />
            );
          })}
        </div>
      </section>
    </Container>
  );
};

FavoritesPage.propTypes = {};

export default FavoritesPage;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

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
        {/* <button
          onClick={() => {
            alert(JSON.stringify(state));
          }}
        >
          show state
        </button>
        <button
          onClick={() => {
            alert(JSON.stringify(productList));
          }}
        >
          show favoritesList
        </button> */}
        <UtilsBlock className={"favorites-utils"} />
        <TitleAbhaya text={"Favorites"} className="favorites-main-title" />
        <DescriptionP
          text={`Your Favorited Products`}
          className="favorites-subtitle"
        />

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

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

  const productList = useGetProductsByFieldName("favorites");
  const controlFavorites = useControlField("favorites");

  controlFavorites.showMeOwnState();

  return (
    <Container>
      <section className="favorites-page">
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

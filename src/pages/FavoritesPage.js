import React, { useState } from "react";
import PropTypes from "prop-types";

import useGetProductsByFieldName from "../hooks/useGetProductsByFieldName";

import Container from "../components/Container";
import UtilsBlock from "../components/UtilsBlock";
import TitleAbhaya from "../components/TitleAbhaya";
import DescriptionP from "../components/DescriptionP";
import Product from "../components/Product";

import star from "../assets/gold-star.svg";
import Star from "../assets/Star";
import { Gold } from "../assets/Star";
import "./FavoritesPage.css";
const FavoritesPage = (props) => {
  const [isFavorite, setIsFavorite] = useState(true);
  const productList = useGetProductsByFieldName("favorites");
  const [
    tempItem = { photoUrl: ["https://via.placeholder.com/200"] },
  ] = productList;
  const { title, desc, price, photoUrl } = tempItem;

  console.log(productList);
  const onFavoriteClick = (e) => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Container>
      <section className="favorites-page">
        <UtilsBlock className={"favorites-utils"} />
        <TitleAbhaya text={"Favorite"} />
        <DescriptionP fontSize="2.1rem" text={`Your Favorited Products`} />

        <div className="favorite-items">
          <div className="favorite-item">
            <Product mobile className="favorite-product" />
            <div
              className="favorites-star"
              style={{ backgroundColor: `${isFavorite ? "yellow" : "grey"}` }}
              onClick={onFavoriteClick}
            >
              <div className="favorites-star-icon">{Gold(isFavorite)}</div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

FavoritesPage.propTypes = {};

export default FavoritesPage;

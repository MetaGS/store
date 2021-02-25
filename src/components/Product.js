import { Link } from "react-router-dom";

import { limitText } from "../utils/limitText.js";
import "./Product.css";

import Rating from "./Rating";
import jeans from "../assets/jeans.jpg";

import star from "../assets/star.svg";
import starTransparent from "../assets/star-transparent.svg";

const Product = ({ product = {}, mobile = false, className = "" }) => {
  let {
    title = "No title Entered",
    desc: description = "No description entered",
    id = "",
    photoUrls: [
      mainPhoto = "https://via.placeholder.com/800",
      ...restPhotos
    ] = [],
    colors = [],
    price = 0,
    sizes = [],
    rating = 0,
    ratings = [],
  } = product;
  console.log(product);

  return (
    <article className={`product ${mobile ? "mobile" : ""} ${className}`}>
      <Link to={`/products/${id}`}>
        <img
          className="product-photo"
          alt="shoes product image"
          src={mainPhoto} //add thumb pics in the future, so we dont use pic with high resolution
        />
      </Link>
      <div className="product-content">
        <Link to={`/products/${id}`}>
          <div>
            <h4 className="product-title">{limitText(title)}</h4>
            <p className="product-description"> {limitText(description, 60)}</p>
          </div>
        </Link>
        <div className="price-and-rating">
          <span className="product-price">${price}</span>
          {!mobile && (
            <div className="rating">
              <span className="rating-quantity">({ratings.length})</span>
              <Rating
                productRating={rating}
                className="product-rating-star-icons"
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Product;

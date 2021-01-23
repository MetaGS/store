import { Link } from "react-router-dom";

import { limitText } from "../utils/limitText.js";
import "./Product.css";

import jeans from "../assets/jeans.jpg";
import star from "../assets/star.svg";
import starTransparent from "../assets/star-transparent.svg";

const Product = ({ product = {}, mobile = false, className = "" }) => {
  /* 
colors: []
desc: "asdfasd"
id: "KbgkHTX3cj6QGndGa3sl"
photoUrls: (3) ["https://firebasestorage.googleapis.com/v0/b/store-…=media&token=e7a87703-9abc-4086-9189-e04ecf3fed61", "https://firebasestorage.googleapis.com/v0/b/store-…=media&token=a1415522-60c9-4738-81bb-6f5a43cc2a60", "https://firebasestorage.googleapis.com/v0/b/store-…=media&token=956f8d9b-e857-49ff-949a-14f4f6bb97f6"]
price: "234"
sizes: []
title: "asdf" */
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
  } = product;

  return (
    <article className={`product ${mobile ? "mobile" : ""} ${className}`}>
      <Link to={`/products/${id}`}>
        <img
          className="product-photo"
          alt="shoes product image"
          src={mainPhoto}
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
              <span className="rating-quantity">(19)</span>
              <span className="star">
                <img src={star} alt="rating star" />
              </span>
              <span className="star">
                <img src={star} alt="rating star" />
              </span>
              <span className="star">
                <img src={star} alt="rating star" />
              </span>
              <span className="star">
                <img src={star} alt="rating star" />
              </span>
              <span className="star">
                <img src={starTransparent} alt="rating star" />
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Product;

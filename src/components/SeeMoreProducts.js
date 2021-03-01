import { useState } from "react";
import Product from "../components/Product";
import { useGetRelatedProducts } from "../firebase/db";
import ProductMobile from "./ProductMobile";

import "./SeeMoreProducts.css";

//this block is for downloading additional related products beneath the single product page
const SeeMoreProducts = ({ tags, currentProductPageId }) => {
  const { relatedProducts, downloading, error } = useGetRelatedProducts(
    "tags",
    tags,
    true
  );

  const showMoreProducts = relatedProducts.filter((product) => {
    return product.id !== currentProductPageId;
  });
  return (
    <div className="product-see-more">
      <h3 className="see-more-title">
        <span>See More</span>
      </h3>
      <div className="see-more-list">
        {showMoreProducts.map((product) => {
          return (
            <Product
              mobile
              product={product}
              key={product.id}
              className="product-see-more-item"
            />
          );
        })}
      </div>
    </div>
  );
};

export default SeeMoreProducts;

import { useState } from "react";
import Product from "../components/Product";
import { useGetRelatedProducts } from "../firebase/db";
import ProductMobile from "./ProductMobile";

import "./SeeMoreProducts.css";

const SeeMoreProducts = ({ tags, currentProductPageId }) => {
  console.log(tags);
  const { relatedProducts, downloading, error } = useGetRelatedProducts(
    "tags",
    tags,
    true
  );
  console.log("this is related Products");
  console.log(relatedProducts);

  const showMoreProducts = relatedProducts.filter((product) => {
    return product.id !== currentProductPageId;
  });
  return (
    <div className="product-see-more">
      <h3 className="see-more-title">See More</h3>
      <div className="see-more-list">
        {showMoreProducts.map((product) => {
          return <Product mobile product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default SeeMoreProducts;

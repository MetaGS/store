import Product from "../components/Product";

import "./Products.css";

const Products = ({ products }) => {
  return (
    <div className="products-list">
      {products?.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Button from "../components/Button";
import "./CartItem.css";

const CartItem = ({ cartItem = {}, updateTotalPrice = () => {} }) => {
  const {
    firstRow = false,
    title,
    desc,
    photoUrls = ["https://via.placeholder.com/200"],
    price = 0,
  } = cartItem;

  let [quantity, setQuantity] = useState(1);

  let quantityChange = (e) => {
    setQuantity(e.target.value);
    updateTotalPrice(e.target.value * +price);
  };

  useEffect(() => {
    console.log(quantity, price);
    updateTotalPrice(quantity * price);
  }, []);

  return (
    <div className="table-row">
      <div className="table-data">
        <span className="table-header"></span>
        <div className="data">
          <img
            src={photoUrls[0]}
            alt="cart product"
            className="cart-product-img"
          />
        </div>
      </div>

      <div className="table-data">
        <span className="table-header">{firstRow && "Name"}</span>
        <h4 className="data title-sm">{title}</h4>
      </div>

      <div className="table-data">
        <span className="table-header">{firstRow && "Description"}</span>
        <div className="data desc-sm">{desc}</div>
      </div>

      <div className="table-data">
        <span className="table-header">{firstRow && "Price"}</span>
        <div className="data table-price">{`$${price}`}</div>
      </div>

      <div className="table-data">
        <span className="table-header">{firstRow && "Quantity"}</span>
        <div className="data table-quantity">
          <input
            type="text"
            className="table-quantity-input"
            value={quantity}
            onChange={quantityChange}
          />
        </div>
      </div>

      <div className="table-data">
        <span className="table-header">{firstRow && "Total"}</span>
        <div className="data table-price">{`$${price * quantity}`}</div>
      </div>

      <div className="table-data">
        <span className="table-header"></span>
        <div className="data">
          <Button type="primary-button-linear" text={"Remove"} />
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {};

export default CartItem;

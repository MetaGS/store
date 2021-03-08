import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import useControlCart from "../hooks/useControlCart";
import useStorage from "../storage";

import Button from "../components/Button";
import "./CartItem.css";
import { limitText } from "../utils/limitText";

const CartItem = ({
  cartItem = {},
  updateTotalPrice = () => {},
  firstRow = false,
}) => {
  const { removeFromField, updateItemInField } = useControlCart("cartOrders");
  const [state, dispatch] = useStorage();

  const {
    title,
    image = ["https://via.placeholder.com/200"],
    price = 0,
    productId,
    cartOrderId,
    color,
    size,
    quantity: quantityFromStorage,
  } = cartItem;

  let [quantity, setQuantity] = useState(quantityFromStorage);

  let quantityChange = (e) => {
    let newQuantity = Number(e.target.value).toFixed(0);
    setQuantity(e.target.value);

    const dbUpdateObject = { ...cartItem, quantity: newQuantity };
    !Number.isNaN(newQuantity) && updateItemInField(dbUpdateObject);
    updateTotalPrice(e.target.value * +price);
  };

  useEffect(() => {
    updateTotalPrice(quantity * price);
  }, []);

  return (
    <div className={`table-row ${!firstRow || "first-row"}`}>
      <div className="table-data table-data-image">
        <span className="table-header"></span>
        <div className="data data-image">
          <img src={image} alt="cart product" className="table-img" />
        </div>
      </div>

      <div className="table-data table-data-title">
        <span className={`table-header ${!firstRow ?? "first-row"}`}>
          {"Name"}
        </span>
        <Link to={`products/${productId}`}>
          <h4 className="data title-sm">{limitText(title, 30)}</h4>
        </Link>
      </div>

      <div className="table-data table-data-color">
        <span className="table-header">{"Color"}</span>
        <div className="data table-color" style={{ backgroundColor: color }}>
          item color
        </div>
      </div>

      <div className="table-data table-data-size">
        <span className="table-header">{"Size"}</span>
        <div className="data table-size">{size}</div>
      </div>

      <div className="table-data table-data-price">
        <span className="table-header">{"Price"}</span>
        <div className="data table-price">{`$${price}`}</div>
      </div>

      <div className="table-data table-data-quantity">
        <span className="table-header">{"Quantity"}</span>
        <div className="data table-quantity">
          <input
            type="number"
            min="0"
            step="1"
            className="table-quantity-input"
            value={quantity}
            onChange={quantityChange}
          />
        </div>
      </div>

      <div className="table-data table-data-total-price">
        <span className="table-header">{"Total"}</span>
        <div className="data table-price">{`$${price * quantity}`}</div>
      </div>

      <div className="table-data table-data-remove">
        <span className="table-header"></span>
        <div className="data">
          <Button
            type="primary-button-linear sm"
            text={"Remove"}
            onClick={() => {
              removeFromField(cartOrderId);
              updateTotalPrice(0);
            }}
          />
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {};

export default CartItem;

{
  /* <div className="table-data table-data-">2
        <span className="table-header">{ "Description"}</span>
        <Link to={`products/${id}`}>
          <div className="data desc-sm">{limitText(desc, 30)}</div>
        </Link>
      </div> */
}

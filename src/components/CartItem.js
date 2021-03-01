import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import useControlField from "../hooks/useControlField";
import useStorage from "../storage";

import Button from "../components/Button";
import "./CartItem.css";
import { limitText } from "../utils/limitText";

const CartItem = ({
  cartItem = {},
  updateTotalPrice = () => {},
  firstRow = false,
}) => {
  const { removeFromField = () => {} } = useControlField("cart");
  const [state, dispatch] = useStorage();

  const {
    title,
    desc,
    photoUrls = ["https://via.placeholder.com/200"],
    price = 0,
    id,
  } = cartItem;

  let [quantity, setQuantity] = useState(1);

  let quantityChange = (e) => {
    setQuantity(e.target.value);
    updateTotalPrice(e.target.value * +price);
  };

  useEffect(() => {
    updateTotalPrice(quantity * price);
  }, []);

  return (
    <div className="table-row">
      <div className="table-row-mobile">
        <div className="table-row-mobile-block1">
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
            <span className={`table-header ${!firstRow ?? "first-row"}`}>
              {"Name"}
            </span>
            <Link to={`products/${id}`}>
              <h4 className="data title-sm">{limitText(title, 30)}</h4>
            </Link>
          </div>
        </div>

        <div className="table-row-mobile-block2">
          {/* <div className="table-data">2
        <span className="table-header">{ "Description"}</span>
        <Link to={`products/${id}`}>
          <div className="data desc-sm">{limitText(desc, 30)}</div>
        </Link>
      </div> */}

          <div className="table-data">
            <span className="table-header">{"Price"}</span>
            <div className="data table-price">{`$${price}`}</div>
          </div>

          <div className="table-data">
            <span className="table-header">{"Quantity"}</span>
            <div className="data table-quantity">
              <input
                type="number"
                min={0}
                className="table-quantity-input"
                value={quantity}
                onChange={quantityChange}
              />
            </div>
          </div>

          <div className="table-data">
            <span className="table-header">{"Total"}</span>
            <div className="data table-price">{`$${price * quantity}`}</div>
          </div>

          <div className="table-data">
            <span className="table-header"></span>
            <div className="data">
              <Button
                type="primary-button-linear sm"
                text={"Remove"}
                onClick={() => {
                  removeFromField(id);
                  updateTotalPrice(0);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {};

export default CartItem;

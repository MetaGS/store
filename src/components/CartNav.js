import React from "react";
import PropTypes from "prop-types";

import "./CartNav.css";
import cart from "../assets/shopping-cart.svg";
const CartNav = ({ items }) => {
  return (
    <div className="cartNav">
      <img src={cart} alt="Cart svg icon" />
      <span className="items-in-cart">{items}</span>
    </div>
  );
};

CartNav.propTypes = {};

export default CartNav;

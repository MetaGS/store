import React from "react";
import PropTypes from "prop-types";

import "./CartNav.css";
import cart from "../assets/shopping-cart.svg";
// import { IoMdCart } from "react-icons/io"; may be will change to this icon

const CartNav = ({ items }) => {
  return (
    <div className="cartNav">
      <img src={cart} alt="Cart svg icon" className="navbar-cart-icon" />
      <span className="items-in-cart">{items}</span>
    </div>
  );
};

CartNav.propTypes = {};

export default CartNav;

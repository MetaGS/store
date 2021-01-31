import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import useStorage from "../storage";

import useGetProductsByFieldName from "../hooks/useGetProductsByFieldName";
import useControlField from "../hooks/useControlField";

import UtilsBlock from "../components/UtilsBlock";
import Container from "../components/Container";
import TitleAbhaya from "../components/TitleAbhaya";
import DescriptionP from "../components/DescriptionP";

import Button from "../components/Button";
import CartItem from "../components/CartItem";
import "./CartPage.css";

const CartPage = (props) => {
  const [state, dispatch] = useStorage();
  const { productsByField = [] } = useControlField("cart");
  const [totalPrice, setTotalPrice] = useState([]);
  const cart = state.cart;
  const itemsInCart = cart.length;

  const updateTotalPrice = (index) => (itemTotalPrice) => {
    setTotalPrice((prevPriceList) => {
      let totalPriceCopy = [...prevPriceList];
      totalPriceCopy[index] = itemTotalPrice;

      return totalPriceCopy;
    });
  };
  //   Later, need to check prices from products in db and compare front end total price and backend (double validation); Когда включим файрбейс функции

  return (
    <Container>
      <section className="cart-page">
        <UtilsBlock />
        <div className="header">
          <TitleAbhaya text={"Items in your cart"} />
          <DescriptionP
            fontSize="2.1rem"
            text={`You have ${itemsInCart} item${itemsInCart === 1 ? "" : "s"}`}
          />
        </div>

        <div className="table">
          {productsByField.map((cartItem, index) => {
            return (
              <CartItem
                cartItem={cartItem}
                key={cartItem.id}
                updateTotalPrice={updateTotalPrice(index)}
              />
            );
          })}

          <div className="total-price">
            <span>
              $
              {totalPrice.reduce((total, current) => {
                return (total += current);
              }, 0)}
            </span>
          </div>
          <div className="cart-order-btn">
            <Button text="Order" type="primary-button big" />
          </div>
        </div>
      </section>
    </Container>
  );
};

CartPage.propTypes = {};

export default CartPage;

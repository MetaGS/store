import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import useStorage from "../storage";
import { getProduct, getProducts } from "../firebase/db";

import UtilsBlock from "../components/UtilsBlock";
import Container from "../components/Container";
import TitleAbhaya from "../components/TitleAbhaya";
import DescriptionP from "../components/DescriptionP";
import productImage from "../assets/small-product.jpg";
import productImage2 from "../assets/product-image2.jpg";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import "./CartPage.css";

const CartPage = (props) => {
  const [state, dispatch] = useStorage();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const cart = state.cart;
  const itemsInCart = cart.length;

  useEffect(() => {
    let cartList = Promise.all(
      cart.map((cartItemId) => {
        let itemIsDownloaded = state.products.find((product) => {
          return product.id === cartItemId;
        });
        if (itemIsDownloaded) {
          return itemIsDownloaded;
        } else {
          return getProduct(cartItemId).then((doc) => {
            return { ...doc.data(), id: doc.id };
          });
        }
      })
    )
      .then((cartItemsResolved) => {
        console.log(cartItemsResolved);
        setCartItems([...cartItemsResolved]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [cart]);

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
          {cartItems.map((cartItem, index) => {
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

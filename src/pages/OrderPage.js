import React, { useState } from "react";
import PropTypes from "prop-types";

import Utils from "../components/UtilsBlock";
import { IoMdCart } from "react-icons/io";
import { AiFillCreditCard } from "react-icons/ai";
import { FaAddressCard } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import {
  handleMinMaxDate,
  isNotANumber,
  useHandlers,
} from "../utils/orderPageUtilsAndHandlers";

import "./OrderPage.css";
import Container from "../components/Container";
import HeaderTitle from "../components/HeaderTitle";
import TitleAbhaya from "../components/TitleAbhaya";
import DescriptionP from "../components/DescriptionP";

import useStorage from "../storage";
import Button from "../components/Button";

const typeTime = document.createElement("input");
typeTime.type = "time";
const supportTimeType = typeTime.type === "time"; // in case if I want to implement substitute for unsupported browsers with select

const OrderPage = (props) => {
  const [{ cartOrders }, dispatch] = useStorage();
  const totalPrice = cartOrders.reduce((previous, current) => {
    return (previous += current.price);
  }, 0);

  const [
    creditCard,
    { handleCvv, handleCreditCardNumber, handleExpiration },
  ] = useHandlers();

  return (
    <div className="order-page">
      <Container>
        <Utils className="order-utils" />

        <HeaderTitle>
          <IoMdCart className="order-page-icon" />
          <TitleAbhaya text={"My Total:"} className="order-page-title" />
          <DescriptionP text={`$${totalPrice}`} className="order-page-total" />
        </HeaderTitle>

        <div className="order-details">
          <form className="order-form">
            <label for="c-d" className="order-form-label">
              Credit Card
            </label>
            <div
              className="pay-details"
              tabIndex="0"
              onFocus={() => {
                console.log("focused");
              }}
            >
              <AiFillCreditCard className="credit-card-icon" />
              <input
                onChange={handleCreditCardNumber}
                value={creditCard.number}
                id="c-d"
                type="tel"
                maxLength="19"
                name="number"
                className="cd-number"
                placeholder="Card Number"
              />
              <input
                type="tel"
                name="expire"
                className="cd-expire"
                placeholder="MM/YY"
                maxLength="5"
                value={creditCard.expire}
                onChange={handleExpiration}
              />
              <input
                type="tel"
                name="cvv"
                className="cd-cv"
                maxLength="3"
                value={creditCard.cvv}
                onChange={handleCvv}
                placeholder="CVV"
              />
            </div>
            <label for="address" className="order-form-label">
              Delivery address
            </label>

            <div className="delivery-details">
              <FaAddressCard className="credit-card-icon" />
              <input type="address" id="address" className="delivery-address" />
            </div>
            <div className="detail-row">
              <div>
                <label for="owner" className="order-form-label">
                  Whom to Deliver
                </label>
                <div className="delivery-details mid-size">
                  <IoIosPerson className="credit-card-icon" />
                  <input
                    type="text"
                    id="owner"
                    autocomplete="off"
                    className="order-owner"
                  />
                </div>
              </div>
              <div>
                <label for="owner-tel" className="order-form-label">
                  Contact number
                </label>
                <div className="delivery-details mid-size">
                  <MdContactPhone className="credit-card-icon" />
                  <input type="tel" id="owner-tel" className="owner-tel" />
                </div>
              </div>
            </div>
            <div className="delivery-date-time">
              <label for="address" id="date" className="order-form-label">
                Preferable time and date
              </label>
              <input
                type="date"
                name=""
                min={handleMinMaxDate()}
                max={handleMinMaxDate(1)}
                id="date"
                className="delivery-date"
                placeholder="2021-07-31 Enter in this format please" // case if browser does not support type="date", if user still enter wrong format date, will handle in server
              />
              <input
                type="time"
                min="11:00"
                max="21:00"
                placeholder="11:00 to 21:00" // in case if browser does not support type="time"
              />
            </div>
            <Button type="secondary-button">Pay And Submit</Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

OrderPage.propTypes = {};

export default OrderPage;

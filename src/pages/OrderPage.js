import React, { useState } from "react";
import PropTypes from "prop-types";

import Utils from "../components/UtilsBlock";
import { IoMdCart } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";
import { IoIosPerson, IoIosCash } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { SiGooglecalendar } from "react-icons/si";
import {
  handleMinMaxDate,
  isNotANumber,
  useHandlers,
} from "../utils/orderPageUtilsAndHandlers";

import "./OrderPage.css";
import Container from "../components/Container";
import HeaderTitle from "../components/HeaderTitle";
import TitleAbhaya from "../components/TitleAbhayaWithoutAnimations";
import DescriptionP from "../components/DescriptionP";
import PayMethodCard from "../components/PayMethodCard";
import Button from "../components/Button";
import InputDetail from "./InputDetail";

import useStorage from "../storage";
import submitOrder from "../firebase/db";
import useControlCart from "../hooks/useControlCart";
import { Redirect } from "react-router-dom";

const typeTime = document.createElement("input");
typeTime.type = "time";
const supportTimeType = typeTime.type === "time"; // in case if I want to implement substitute for unsupported browsers with select

const OrderPage = (props) => {
  //component init
  const [{ cartOrders }, dispatch] = useStorage();
  const controlCart = useControlCart("cartOrders");

  const [deliveryDetails, setDeliveryDetails] = useState({
    address: "",
    owner: "",
    "contact-number": "",
    date: "",
    time: "",
  });
  const [cardInformation, setCardInformation] = useState({});
  const [payMethod, setpayMethod] = useState("visa");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const totalPrice = cartOrders.reduce((previous, current) => {
    return (previous += current.price * Number(current.quantity));
  }, 0);
  const formDisabled = totalPrice === 0;

  //handlers
  const onDeliveryDetailsChange = ({ target }) => {
    const { name, value } = target;
    setDeliveryDetails({ ...deliveryDetails, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    setSubmitting(true);
    submitOrder({
      deliveryDetails,
      ...cartOrders,
      totalPrice,
      payMethod,
      cardInformation,
    }).then((response) => {
      setSubmitting(false);
      if (response?.error) {
        console.log("Error happened");
        return;
      }
      controlCart.dangerousClear().then((success) => {
        if (success) {
          setSubmitted("submitted");
          setTimeout(() => {
            setSubmitted("redirect");
          }, 5000);
        }
      });
    });
  };

  const onPayMethodChange = ({ target }) => {
    setpayMethod(target.value);
  };

  const {
    address,
    owner,
    time,
    date,
    "contact-number": contactNumber,
  } = deliveryDetails;

  console.log(deliveryDetails);

  const PayMethodOnDelivery = (
    <div className="delivery-details">
      <FaAddressCard className="detail-field-icon" />
      <input
        type="text"
        name="pay-on-delivery"
        id="address"
        value={payMethod}
        disabled={true}
        className="pay-on-delivery"
        required
      />
    </div>
  );

  return (
    <div className="order-page">
      {submitting && <div className="order-submitting">Submitting...</div>}
      {submitted === "submitted" && (
        <div className="order-submitting">
          Successfully submitted. Our operator will call you soon.
        </div>
      )}
      {submitted === "redirect" && <Redirect to="/products" />}
      <Container className="order-page-container">
        <Utils className="order-utils" />

        <HeaderTitle>
          <IoMdCart className="order-page-icon" />
          <TitleAbhaya text={"My Total:"} className="order-page-title" />
          <DescriptionP text={`$${totalPrice}`} className="order-page-total" />
        </HeaderTitle>

        <div className="order-details">
          {/* need to move disabled to fieldset */}
          <form
            className="order-form"
            disabled={formDisabled}
            onSubmit={onSubmit}
          >
            <InputDetail
              Icon={IoIosCash}
              label="Choose Pay Method"
              labelId="select-pay-method"
            >
              <select
                id="select-pay-method"
                name="select-pay-method"
                className="select-pay-method"
                value={payMethod}
                onChange={onPayMethodChange}
              >
                <option value="visa">VISA</option>
                <option value="master-card">MasterCard</option>
                <option value="pay-on-delivery">Pay on Delivery</option>
              </select>
            </InputDetail>

            {payMethod === "pay-on-delivery" ? (
              ""
            ) : (
              <PayMethodCard updateParent={setCardInformation} />
            )}

            <InputDetail
              labelId="address"
              label="Delivery Address"
              Icon={FaAddressCard}
            >
              <input
                type="address"
                name="address"
                id="address"
                value={address}
                onChange={onDeliveryDetailsChange}
                className="delivery-address"
                required
              />
            </InputDetail>

            <div className="detail-row">
              <div>
                <InputDetail
                  Icon={IoIosPerson}
                  label="Whot to Deliver"
                  lableId={owner}
                >
                  <input
                    type="text"
                    id="owner"
                    value={owner}
                    onChange={onDeliveryDetailsChange}
                    name="owner"
                    autocomplete="off"
                    placeholder="Caterine Carter"
                    className="order-owner"
                  />
                </InputDetail>
              </div>
              <div>
                <InputDetail
                  Icon={MdContactPhone}
                  labelId="owner-tel"
                  label="Contact number"
                >
                  <input
                    type="tel"
                    id="owner-tel"
                    value={contactNumber}
                    onChange={onDeliveryDetailsChange}
                    name="contact-number"
                    className="owner-tel"
                    pattern="[0-9+]+"
                    placeholder="+123344556 [only numbers]"
                    required
                  />
                </InputDetail>
              </div>
            </div>

            <InputDetail
              label="Preferable date and time"
              labelId="date"
              Icon={SiGooglecalendar}
              className="input-detail__date-time"
            >
              <div className="date-time-input-wrapper">
                <input
                  type="date"
                  name="date"
                  required
                  value={date}
                  onChange={onDeliveryDetailsChange}
                  min={handleMinMaxDate()}
                  max={handleMinMaxDate(1)}
                  id="date"
                  className="delivery-date"
                  placeholder="2021-07-31 Enter in this format please" // case if browser does not support type="date", if user still enter wrong format date, will handle in server
                />
                <input
                  type="time"
                  name="time"
                  value={time}
                  onChange={onDeliveryDetailsChange}
                  min="11:00"
                  className="delivery-time"
                  max="21:00"
                  placeholder="11:00 to 21:00" // in case if browser does not support type="time"
                />
              </div>
            </InputDetail>

            <div className="pay-submit-wrapper">
              <Button type="primary-button" className="pay-submit">
                Pay And Submit
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

OrderPage.propTypes = {};

export default OrderPage;

/* const draft = (
  <div className="delivery-date-time">
    <label for="address" id="date" className="order-form-label">
      Preferable date and time
    </label>
    <div className="date-time-input-wrapper">
      <input
        type="date"
        name="date"
        required
        value={date}
        onChange={onDeliveryDetailsChange}
        min={handleMinMaxDate()}
        max={handleMinMaxDate(1)}
        id="date"
        className="delivery-date"
        placeholder="2021-07-31 Enter in this format please" // case if browser does not support type="date", if user still enter wrong format date, will handle in server
      />
      <input
        type="time"
        name="time"
        value={time}
        onChange={onDeliveryDetailsChange}
        min="11:00"
        max="21:00"
        placeholder="11:00 to 21:00" // in case if browser does not support type="time"
      />
    </div>
  </div>
); */

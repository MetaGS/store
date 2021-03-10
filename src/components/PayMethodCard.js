import React from "react";
import PropTypes from "prop-types";
import { useHandlers } from "../utils/orderPageUtilsAndHandlers";
import { AiFillCreditCard } from "react-icons/ai";
import CautionP from "./CautionP";

import "./PayMethodCard.css";
const PayMethoCard = (props) => {
  const [
    creditCard,
    { handleCvv, handleCreditCardNumber, handleExpiration },
  ] = useHandlers();
  return (
    <>
      <label for="pay-option" className="pay-card-label">
        Credit Card
      </label>
      <CautionP style={{ margin: "0px 0px 5px" }}>
        Currently this form of payment is not supported.{" "}
      </CautionP>
      <div
        className="pay-details"
        tabIndex="0"
        onFocus={() => {
          console.log("focused");
        }}
      >
        <AiFillCreditCard className="payment-field-icon" />
        <input
          onChange={handleCreditCardNumber}
          value={creditCard.number}
          id="pay-option"
          type="tel"
          maxLength="20"
          size="22"
          minLength="16" // actually it is 19, wrote 16 just to do not confuse users, because only 16 numbers in card
          name="number"
          className="cd-number"
          placeholder="Card Number"
          required
        />
        <div className="expire-cvv">
          <input
            type="tel"
            name="expire"
            className="cd-expire"
            placeholder="MM/YY"
            maxLength="5"
            minLength="4"
            value={creditCard.expire}
            onChange={handleExpiration}
            required
          />
          <input
            type="tel"
            name="cvv"
            className="cd-cv"
            size="4"
            minLength="3"
            maxLength="3"
            value={creditCard.cvv}
            onChange={handleCvv}
            placeholder="CVV"
            required
          />
        </div>
      </div>
    </>
  );
};

PayMethoCard.propTypes = {};

export default PayMethoCard;

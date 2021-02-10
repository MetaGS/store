import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "./Button";

import shareIcon from "../assets/share.svg";
import "./UtilsBlock.css";

const UtilsBlock = ({ share = false, children = null, className = "" }) => {
  const history = useHistory();

  return (
    <section className={`utils ${className}`}>
      <Button
        type="secondary-button"
        text="BACK"
        onClick={(e) => {
          console.log("clicking back");
          history.goBack();
        }}
      />
      <div className="product-links">
        {/* <button className="btn-icon">
                    <img src={addFavorites} alt="" />
                </button> */}
        {children}
        {share && (
          <a
            onClick={() => {
              console.log(history);
            }}
            className="btn-icon"
            href={`https://wa.me/?text=http://localhost:3000${history.location.pathname}`}
            target="_blank"
            rel="norefferer"
          >
            {/* "https://wa.me/whatsappphonenumber/?text=urlencodedtext" it is for <whatsapp me> */}
            <img src={shareIcon} alt="share product" />
          </a>
        )}
      </div>
    </section>
  );
};

UtilsBlock.propTypes = {};

export default UtilsBlock;

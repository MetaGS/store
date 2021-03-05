import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "./Button";

import shareIcon from "../assets/share.svg";
import "./UtilsBlock.css";

export const BackButton = ({
  children,
  type = "secondary-button",
  ...props
}) => {
  const history = useHistory();

  return (
    <Button
      {...props}
      type={type}
      text={children}
      onClick={(e) => {
        console.log("clicking back");
        history.goBack();
      }}
    />
  );
};

export const Utils = ({
  share = false,
  children = null,
  className = "",
  primaryColor = "var(--primary-color)",
}) => {
  const history = useHistory();
  return (
    <section className={`utils ${className}`}>
      {children}
      <div className="product-links">
        {/* <button className="btn-icon">
                    <img src={addFavorites} alt="" />
                </button> */}

        {share && (
          <a
            onClick={() => {}}
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

const UtilsBlock = ({ children = null, ...props }) => {
  const history = useHistory();
  return (
    <Utils {...props}>
      <BackButton>BACK</BackButton>
      {children}
    </Utils>
  );
};

UtilsBlock.propTypes = {};

export default UtilsBlock;

// <section className={`utils ${className}`}>
{
  /* <BackButton>BACK</BackButton>
<div className="product-links">
  {/* <button className="btn-icon">
              <img src={addFavorites} alt="" />
          // </button> */
}
//   {children}
//   {share && (
//     <a
//       onClick={() => {}}
//       className="btn-icon"
//       href={`https://wa.me/?text=http://localhost:3000${history.location.pathname}`}
//       target="_blank"
//       rel="norefferer"
//     >
//       {/* "https://wa.me/whatsappphonenumber/?text=urlencodedtext" it is for <whatsapp me> */}
//       <img src={shareIcon} alt="share product" />
//     </a>
//   )}
// </div>
// </section> */}

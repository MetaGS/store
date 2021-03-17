import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const icon = {
  visible: {
    pathLength: 1,
    fill: "rgba(0, 0, 0, 1)",
  },
  hidden: {
    pathLength: 0,
    fill: "rgba(0, 0, 0, 0)",
  },
};

const Buttons = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        flexWrap: "wrap",
        flexDirection: "column",
      }}
    >
      <div
        style={{ marginTop: "5px", padding: "10px", border: "1px solid black" }}
      >
        <div style={{ margin: "30px 0" }}>
          <svg
            className="downloading-icon"
            width="50"
            height="64"
            viewBox="0 0 50 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.90698 40.3164L36 0L20.7209 27.6767L32.6512 23.754L0 63.4167L20.7209 32.2532L6.90698 40.3164Z"
              className="downloading-icon"
            />
            <motion.path
              d="M31.6102 15.5275C31.334 15.5275 31.1102 15.7514 31.1102 16.0275C31.1102 16.3037 31.334 16.5275 31.6102 16.5275V15.5275ZM22 48.5275C21.7239 48.5275 21.5 48.7514 21.5 49.0275C21.5 49.3037 21.7239 49.5275 22 49.5275V48.5275ZM31.6102 16.5275H46V15.5275H31.6102V16.5275ZM48.5 19.0275V46.0275H49.5V19.0275H48.5ZM46 48.5275H22V49.5275H46V48.5275ZM48.5 46.0275C48.5 47.4082 47.3807 48.5275 46 48.5275V49.5275C47.933 49.5275 49.5 47.9605 49.5 46.0275H48.5ZM46 16.5275C47.3807 16.5275 48.5 17.6468 48.5 19.0275H49.5C49.5 17.0945 47.933 15.5275 46 15.5275V16.5275Z"
              variants={icon}
              initial="hidden"
              animate="visible"
            />
          </svg>
          <div className="box-check downloading-icon"></div>
        </div>

        <Button type={"primary"}>Button Primary</Button>
        <Button type={"primary"} disabled>
          Button Primary Disabled
        </Button>
      </div>
      <div
        style={{ marginTop: "5px", padding: "10px", border: "1px solid black" }}
      >
        <Button
          type="primary-button"
          className="sign-in-form__submit"
          disabled={false}
        >
          Button from signForms
        </Button>
        <Button
          type="primary-button"
          className="sign-in-form__submit"
          disabled={true}
        >
          Button from signForms disabled
        </Button>
      </div>
      <div
        style={{ marginTop: "5px", padding: "10px", border: "1px solid black" }}
      >
        <Button type="rounded primary md" className="btn-header">
          <Link to={"/"}>Link to withing [Header]</Link>
        </Button>
        <Button type="rounded primary md" disabled className="btn-header">
          <Link to={"/"}>Link to withing [Header] disbabled</Link>
        </Button>
      </div>
      <div
        style={{ marginTop: "5px", padding: "10px", border: "1px solid black" }}
      >
        <Button type="secondary" className="sidebar-logout">
          Form sidebar logout
        </Button>
        <Button disabled type="secondary" className="sidebar-logout">
          Form sidebar logout disabled
        </Button>
      </div>
      <div
        style={{ marginTop: "5px", padding: "10px", border: "1px solid black" }}
      >
        <Button
          type="big primary-button "
          className={"addToCart-button"}
          text="add to cart"
        />
        <Button
          type="big primary-button "
          disabled
          className={"addToCart-button"}
          text="add to cart disabled"
        />
      </div>
      <div
        style={{ marginTop: "5px", padding: "10px", border: "1px solid black" }}
      >
        <Button type="big secondary " text="add to Favorites" />
        <Button
          type="big secondary "
          disabled
          text="add to Favorites disabled"
        />
      </div>
      <div
        style={{ marginTop: "5px", padding: "10px", border: "1px solid black" }}
      >
        <Button text="Write a Review" type="big secondary " />
        <Button text="Write a Review" type="big secondary disabled " disabled />
        <Button type="big secondary " text="Submit Review" />
        <Button type="big secondary " text="Submit Review disabled" disabled />
        <Button type="big secondary " text="Sign in First" />
        <Button type="big secondary " text="Sign in First disabled" disabled />
      </div>
      <div
        style={{ marginTop: "5px", padding: "10px", border: "1px solid black" }}
      >
        <Button type="primary-button" className="pay-submit">
          Pay And Submit orderpage
        </Button>
        <Button type="primary-button" disabled className="pay-submit">
          Pay And Submit orderpage disabled
        </Button>
      </div>
      <div
        style={{ marginTop: "5px", padding: "10px", border: "1px solid black" }}
      >
        <div className="primary-button big btn" role="button">
          <Link to="/order" className="cart-order-link">
            Order this is div
          </Link>
        </div>
      </div>
    </div>
  );
};

Buttons.propTypes = {};

export default Buttons;

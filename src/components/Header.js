import React from "react";
import PropTypes from "prop-types";

import "./Header.css";
import TitleAbhaya from "./TitleAbhaya";
import Description from "./DescriptionP";
import Button from "./Button";
import { Link } from "react-router-dom";

const defaultData = {
  intro: "STYLISH COLLECTION",
  title: "ABOUT T-FIT",
  subtitle: "clothes selling company",
  description: ` Our mission is to bring to the people Lorem ipsum, dolor sit amet
    consectetur adipisicing elit. Perspiciatis maiores in aut? Optio labore
    a debitis harum praesentium obcaecati quaerat placeat cupiditate,
    nesciunt rem dicta repellendus explicabo sapiente culpa eaque.`,
  buttonText: "See Now",
};

const Header = ({ data = defaultData, colors = {}, className = "" }) => {
  return (
    <header
      className={`header-block ${className}`}
      style={{
        "--main-text-color": colors.main ?? "rgb(231, 229, 229)",
        "--stylish-color": colors.stylish ?? "rgb(189, 136, 37)",
        "--title-color": colors.title ?? colors.main ?? "rgb(231, 229, 229)",
      }}
    >
      <div className="topline-header">{data.intro}</div>
      <TitleAbhaya className="header-title">{data.title}</TitleAbhaya>
      <Description className="subtitle-header">{data.subtitle}</Description>
      <p className="desc-header">{data.description}</p>
      <Button type="rounded primary md" className="btn-header">
        <Link to="/products">{data.buttonText}</Link>
      </Button>
    </header>
  );
};

const style = {};

Header.propTypes = {};

export default Header;

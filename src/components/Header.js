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

export const HeaderWrapper = ({
  children,
  data,
  colors = {},
  className = "",
  linkTo = "/products",
}) => {
  return (
    <header
      className={`header-block ${className}`}
      style={{
        "--main-text-color": colors.main ?? "rgb(231, 229, 229)",
        "--stylish-color": colors.stylish ?? "rgb(189, 136, 37)",
        "--title-color": colors.title ?? colors.main ?? "rgb(231, 229, 229)",
      }}
    >
      {children}
      <Button type="rounded primary md" className="btn-header">
        <Link to={linkTo}>{data.buttonText}</Link>
      </Button>
    </header>
  );
};

export const HeaderTopline = ({ children, className = "" }) => {
  return <div className={`topline-header`}>{children}</div>;
};

export const HeaderTitle = ({ className = "", children = "", ...props }) => {
  return (
    <TitleAbhaya className={`header-title ${className}`} {...props}>
      {children.split(" ")}
    </TitleAbhaya>
  );
};

export const HeaderSubtitle = ({ children, className = "", ...props }) => {
  return (
    <Description className={`subtitle-header ${className}`} {...props}>
      {children}
    </Description>
  );
};

export const HeaderDescription = ({ children, className, ...props }) => {
  return <p className={`desc-header ${className}`}>{children}</p>;
};

const Header = ({ data = defaultData, ...props }) => {
  const { intro, title, subtitle, description, ...leftData } = data;

  return (
    <HeaderWrapper {...props} data={leftData}>
      <HeaderTopline>{intro}</HeaderTopline>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderSubtitle>{subtitle}</HeaderSubtitle>
      <HeaderDescription>{description}</HeaderDescription>
    </HeaderWrapper>
  );
};

const style = {};

Header.propTypes = {};

export default Header;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

import UtilsBlock from "../components/UtilsBlock";
import Container from "../components/Container";
import TitleAbhaya from "../components/TitleAbhaya";
import Description from "../components/DescriptionP";
import pic1 from "../assets/about-page-pic1.jpg";

import "./About.css";
import videoBg from "../assets/about-page-video1.mp4";
import Button from "../components/Button";
import socialsArray from "../components/SvgSocial";
import Header from "../components/Header";

const About = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  return (
    <div className="wrapper-about">
      <img src={pic1} className="video-background-about" alt="" />

      <div className="slide-about">
        <UtilsBlock className="about-utils" />
        <div className="row-about">
          <div
            className="column1-about column-about"
            // style={{ backgroundColor: "red" }}
          >
            <Header />
          </div>
          <div className="column2-about column-about">
            <div className="svg-social-links">
              {socialsArray.map(({ icon, href }, index) => {
                return <a href="#">{icon}</a>;
              })}
            </div>
            <div className="email-about">
              <a href="mailto:marketdeal7788@gmail.com">
                <FiMail />{" "}
                <span className="email-text-about">
                  marketdeal7788@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;

const firtsVersion = (
  <article className="article-about">
    <header>
      <TitleAbhaya className="about-title">ABOUT T-FIT</TitleAbhaya>
      <Description>This is telling story about our company </Description>
    </header>
    <p className="about-description">
      Our mission is to bring to the people Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Perspiciatis maiores in aut? Optio labore a
      debitis harum praesentium obcaecati quaerat placeat cupiditate, nesciunt
      rem dicta repellendus explicabo sapiente culpa eaque.
    </p>

    <h2 className="subtitle-about">The benefits you get</h2>
    <p className="about-description">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, accusamus
      vero. Vitae nam minima ad non maiores suscipit, officiis aut.
    </p>

    <h2 className="subtitle-about">We make best products</h2>
    <p className="about-description">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
      nostrum porro quos consectetur fugiat reprehenderit rerum ut, tenetur hic
      eos consequuntur error voluptate? Pariatur, asperiores?
    </p>

    <address className="address-about"></address>
  </article>
);

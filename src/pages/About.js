import React, { useState } from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";

import UtilsBlock from "../components/UtilsBlock";
import Container from "../components/Container";
import TitleAbhaya from "../components/TitleAbhaya";
import Description from "../components/DescriptionP";
import pic1 from "../assets/about-page-pic1.jpg";

import "./About.css";
import videoBg from "../assets/about-page-video1.mp4";

const About = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  let [bounceScroll, setBounceScroll] = useState(false);

  console.log(slideIndex);

  const onScroll = (e) => {
    let index = slideIndex;
    // console.log(e);
    const deltaY = e.deltaY;
    console.log(index);
    if (!bounceScroll) {
      console.log("%cscrolls", "color: red; font-size:1.2rem;");
      setBounceScroll((bounceState) => true);
      setTimeout(() => {
        setBounceScroll((bounceState) => false);
      }, 500);
      if (deltaY < 0) {
        setSlideIndex(index - 1 < 0 ? index : --index);
        return;
      }
      const newIndex = index + 1 > 6 ? index : ++index;
      console.log(newIndex);
      setSlideIndex(newIndex);
    }
  };

  return (
    <div className="wrapper-about" onScroll={onScroll} onWheel={onScroll}>
      <video
        className="video-background-about"
        autoPlay
        muted
        loop
        src={videoBg}
        type="video/mp4"
      />
      {/* <img src={pic1} className="video-background-about" alt="" /> */}
      {/* <Container className="container-about"> */}
      {/* <UtilsBlock className="utils-about" /> */}
      {/* </Container> */}
      <Carousel
        showStatus={false}
        axis="vertical"
        showIndicators={false}
        selectedItem={slideIndex}
        onChange={(index) => {
          console.log(index);
        }}
        renderThumbs={() => false}
      >
        <div className="slide-about" style={{ backgroundColor: "green" }}>
          Name
        </div>
        <div className="slide-about" style={{ backgroundColor: "red" }}>
          Name
        </div>
        <div className="slide-about" style={{ backgroundColor: "blue" }}>
          Name
        </div>
        <div className="slide-about" style={{ backgroundColor: "yellow" }}>
          Name
        </div>
        <div className="slide-about" style={{ backgroundColor: "pink" }}>
          Name
        </div>
        <div className="slide-about" style={{ backgroundColor: "grey" }}>
          Name
        </div>
      </Carousel>
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

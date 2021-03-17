import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";

import SeeMore from "../components/SeeMore";
import SecondaryContainer from "../components/SecondaryContainer";
import Products from "../components/Products";

import "./MainHTML.css";
import {
  HeaderWrapper as Header,
  HeaderTitle,
  HeaderTopline,
  HeaderSubtitle,
} from "../components/Header";
import videoBg from "../assets/about-page-video1.mp4";
import ProductsPage from "./ProductsPage";
import SignButtons from "../components/SignButtons";
import About from "./About";
import Footer from "../components/Footer";
import pic1 from "../assets/about-page-pic1.jpg";
import Container from "../components/Container";

const MainHTML = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  let [bounceScroll, setBounceScroll] = useState(false);
  const [stopSwipe, setStopSwipe] = useState(false);
  const [backgroundVideoDownloading, setVideoDownloading] = useState(true);
  const numberOfPages = 2; //this is zero based index so there is 2 pages

  // const checkEvent = (e) => {
  //   console.log(e.type);
  // };

  const stopPropagation = (e) => {
    console.log(e);
    if (!canScroll(e)) {
      e.stopPropagation();
    }
  };

  const stopSwipeUtil = (e) => {
    const slideTopElement = e.target.closest(".slide-me");

    if (!slideTopElement) return true;
    const { scrollHeight, scrollTop, offsetHeight } = slideTopElement;
    const slideOnHisBottom = scrollHeight - scrollTop - offsetHeight < 20;
    const slideOnHisTop = scrollTop < 20;

    if (slideOnHisBottom) {
    }
  };

  const canScroll = (e, vector) => {
    const slideTopElement = e.target.closest(".slide-me");
    console.log(slideTopElement);
    if (!slideTopElement) return true;
    const { scrollHeight, scrollTop, offsetHeight } = slideTopElement;
    const slideOnHisBottom = scrollHeight - scrollTop - offsetHeight < 20;
    const slideOnHisTop = scrollTop < 20;
    if (vector === "top") {
      if (slideOnHisTop) return true;
      return false;
    } else {
      if (slideOnHisBottom) return true;
      return false;
    }
  };

  const slidePage = (e) => {
    let index = slideIndex;
    const deltaY = e.deltaY < 0 ? "top" : "bottom";

    if (!bounceScroll) {
      setBounceScroll((bounceState) => true);
      setTimeout(() => {
        setBounceScroll((bounceState) => false);
      }, 500);
      if (deltaY === "top") {
        canScroll(e, deltaY) && setSlideIndex(index - 1 < 0 ? index : --index);
        return;
      }
      const newIndex = index + 1 > numberOfPages ? index : ++index;

      canScroll(e, deltaY) && setSlideIndex(newIndex);
    }
  };

  const onScroll = (e) => {
    slidePage(e);
  };

  const winDoc = window.document.documentElement;
  return (
    <>
      <div className="main-page main main-html" onWheel={onScroll}>
        {/* uncomment at production */}
        {backgroundVideoDownloading && (
          <img className="video-background-about" src={pic1} />
        )}
        {/* <video
          className="video-background-about"
          autoPlay
          muted
          loop
          onLoad={() => {
            setVideoDownloading(false);
          }}
          src={videoBg}
          type="video/mp4"
        /> */}
        {/* <div>clientHeight:{winDoc.clientHeight}</div>
        <div>offsetHeight:{winDoc.offsetHeight}</div> */}

        <Container>
          <div className="slide-main-page  slide-me">
            <div className="row-about">
              <div className="column1-about column-about">
                <SecondaryContainer>
                  <Header
                    data={{ buttonText: "See collection now" }}
                    colors={{ title: "lightgray" }}
                    className="header-main-html"
                  >
                    <HeaderTopline>t-fit</HeaderTopline>
                    <HeaderTitle>Bring Dreams True</HeaderTitle>
                    <HeaderSubtitle>Best Collection in Bishkek</HeaderSubtitle>
                  </Header>

                  <SeeMore />
                </SecondaryContainer>
              </div>
            </div>
          </div>
          {/* <div
            className="home-products slide-me"
            onTouchStart={(e) => {
              // e.stopPropagation();
            }}
            onTouchEnd={(e) => {
              // e.stopPropagation();
            }}
          >
           

          {/*  */}
          {/* </div> */}
          {/* <div className="main-auto-height">
          <ProductsPage className="main-page-products" />
        </div> */}
        </Container>
        <div className="wrapper-footer ">
          {/* <img src={pic1} className="video-background-footer" alt="" /> */}
          <Footer />
        </div>
      </div>
    </>
  );
};

//   <div className="wrapper-about" onScroll={onScroll} onWheel={onScroll}>
//     <video
//       className="video-background-about"
//       autoPlay
//       muted
//       loop
//       src={videoBg}
//       type="video/mp4"
//     />
//

//   </div>

export default MainHTML;

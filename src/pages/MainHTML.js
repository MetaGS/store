import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";

import SeeMore from "../components/SeeMore";
import SecondaryContainer from "../components/SecondaryContainer";
import Products from "../components/Products";

import "./MainHTML.css";
import Header from "../components/Header";
import videoBg from "../assets/about-page-video1.mp4";
import ProductsPage from "./ProductsPage";
import About from "./About";
import Footer from "../components/Footer";
import pic1 from "../assets/about-page-pic2.jpg";

const data = {
  intro: "t-fit",
  title: "Bring  Dreams True",
  subtitle: "best collection in bishkek",
  description: `It is a long established fact that a reader will be distracted by
  the readable content of a page when looking at its layout. The
  point of using Lorem Ipsum is that it has a more-or-less normal`,
  buttonText: "See collection now",
};

const MainHTML = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  let [bounceScroll, setBounceScroll] = useState(false);
  const [stopSwipe, setStopSwipe] = useState(false);
  const numberOfPages = 2; //this is zero based index so there is 2 pages

  const checkEvent = (e) => {
    console.log(e.type);
  };

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
    console.log("slide on his bottom ", slideOnHisBottom);
    console.log("slide on his top ", slideOnHisTop);
    console.log("vector", vector);
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

    console.log("%cscrolls", "color: red; font-size:1.2rem;");
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
    console.log("onWheel runs");
    slidePage(e);
  };
  return (
    <>
      <div
        className="main-page main main-html"
        onWheel={onScroll}
        onScroll={() => {
          console.log("its top div");
        }}
      >
        {/* uncomment at production */}
        {/* <video
          className="video-background-about"
          autoPlay
          muted
          loop
          src={videoBg}
          type="video/mp4"
        /> */}
        <Carousel
          showStatus={false}
          axis="vertical"
          showArrows={false}
          showIndicators={false}
          selectedItem={slideIndex}
          preventMovementUntilSwipeScrollTolerance={true}
          onClickItem={(index) => {}}
          autoPlay={false}
          onChange={(index, something) => {}}
          renderThumbs={() => false}
        >
          <div className="slide-main-page slide-me">
            <div className="row-about">
              <div className="column1-about column-about">
                <SecondaryContainer>
                  <Header
                    data={data}
                    colors={{ title: "#3a3937" }}
                    className="header-main-html"
                  />

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
          <div className="slide-main-page footer-about slide-me">
            <About />
          </div>

          <div className="wrapper-footer">
            <img src={pic1} className="video-background-footer" alt="" />
            <Footer />
          </div>
        </Carousel>
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

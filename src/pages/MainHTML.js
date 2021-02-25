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
  const [allowSlide, setAllowSlide] = useState(false);

  const canScroll = (e, vector) => {
    console.log("onScrollInsideCarousel");
    const slideTopElement = e.target.closest(".slide-me");
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

  console.log(slideIndex);

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
      const newIndex = index + 1 > 4 ? index : ++index;

      canScroll(e, deltaY) && setSlideIndex(newIndex);
    }
  };

  const onScroll = (e) => {
    let index = slideIndex;

    slidePage(e);
  };
  return (
    <>
      <div className="main-page main" onWheel={onScroll} onScroll={onScroll}>
        <video
          className="video-background-about"
          autoPlay
          muted
          loop
          src={videoBg}
          type="video/mp4"
        />

        <Carousel
          showStatus={false}
          axis="vertical"
          showIndicators={false}
          selectedItem={slideIndex}
          onChange={(index) => {}}
          renderThumbs={() => false}
        >
          <div className="slide-main-page slide-me">
            <div className="row-about">
              <div className="column1-about column-about">
                <SecondaryContainer>
                  <Header data={data} colors={{ title: "#fff" }} />

                  <SeeMore />
                </SecondaryContainer>
              </div>
              <div className="column2-about column-about"></div>
            </div>
          </div>

          <ProductsPage className="home-products slide-me" />

          <div className="slide-main-page footer">
            <About />
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

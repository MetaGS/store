import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";

import SeeMore from "../components/SeeMore";
import SecondaryContainer from "../components/SecondaryContainer";
import Products from "../components/Products";

import "./MainHTML.css";
import Header from "../components/Header";
import videoBg from "../assets/about-page-video1.mp4";

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

  console.log(slideIndex);

  const onScroll = (e) => {
    let index = slideIndex;

    const deltaY = e.deltaY;

    if (!bounceScroll) {
      // console.log("%cscrolls", "color: red; font-size:1.2rem;");
      setBounceScroll((bounceState) => true);
      setTimeout(() => {
        setBounceScroll((bounceState) => false);
      }, 500);
      if (deltaY < 0) {
        setSlideIndex(index - 1 < 0 ? index : --index);
        return;
      }
      const newIndex = index + 1 > 6 ? index : ++index;

      setSlideIndex(newIndex);
    }
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
        <section className="left"></section>
        <Carousel
          showStatus={false}
          axis="vertical"
          showIndicators={false}
          selectedItem={slideIndex}
          onChange={(index) => {}}
          renderThumbs={() => false}
        >
          <div className="slide-about">
            <div className="row-about">
              <div
                className="column1-about column-about"
                // style={{ backgroundColor: "red" }}
              >
                <SecondaryContainer>
                  <Header data={data} colors={{ title: "#fff" }} />

                  <SeeMore />
                </SecondaryContainer>
              </div>
              <div className="column2-about column-about">
                {/* <img src={pic1} className="video-background-about" alt="" /> */}
              </div>
            </div>
          </div>
          <div className="slide-about" style={{ backgroundColor: "red" }}>
            <Products />
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

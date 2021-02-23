import Navbar from "../components/Navbar";
import SeeMore from "../components/SeeMore";
import SecondaryContainer from "../components/SecondaryContainer";
import Button from "../components/Button.js";
import DescriptionP from "../components/DescriptionP";

import mainGirl from "../assets/main-girl.png";
import Main from "../components/Main";
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
  return (
    <>
      <Main className="main-page">
        <video
          className="video-background-about"
          autoPlay
          muted
          loop
          src={videoBg}
          type="video/mp4"
        />
        <section className="left">
          <SecondaryContainer>
            <Header data={data} />

            <SeeMore />
          </SecondaryContainer>
        </section>
      </Main>
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

//     <Carousel
//       showStatus={false}
//       axis="vertical"
//       showIndicators={false}
//       selectedItem={slideIndex}
//       onChange={(index) => {}}
//       renderThumbs={() => false}
//     >
//       <div className="slide-about">
//         <div className="row-about">
//           <div
//             className="column1-about column-about"
//             // style={{ backgroundColor: "red" }}
//           >
//             <header>
//               <div className="topline-about">STYLISH COLLECTION</div>
//               <TitleAbhaya className="about-title">ABOUT T-FIT</TitleAbhaya>
//               <Description className="subtitle-about">
//                 clothes selling company
//               </Description>
//               <p className="desc-about">
//                 Our mission is to bring to the people Lorem ipsum, dolor sit
//                 amet consectetur adipisicing elit. Perspiciatis maiores in aut?
//                 Optio labore a debitis harum praesentium obcaecati quaerat
//                 placeat cupiditate, nesciunt rem dicta repellendus explicabo
//                 sapiente culpa eaque.
//               </p>
//               <Button type="rounded primary md" className="btn-about">
//                 See Now
//               </Button>
//             </header>
//           </div>
//           <div className="column2-about column-about">
//             {/* <img src={pic1} className="video-background-about" alt="" /> */}
//           </div>
//         </div>
//       </div>
//       <div className="slide-about" style={{ backgroundColor: "red" }}>
//         Name
//       </div>
//       <div className="slide-about" style={{ backgroundColor: "blue" }}>
//         Name
//       </div>
//       <div className="slide-about" style={{ backgroundColor: "yellow" }}>
//         Name
//       </div>
//       <div className="slide-about" style={{ backgroundColor: "pink" }}>
//         Name
//       </div>
//       <div className="slide-about" style={{ backgroundColor: "grey" }}>
//         Name
//       </div>
//     </Carousel>
//   </div>

export default MainHTML;

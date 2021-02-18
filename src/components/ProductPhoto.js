import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProductPhoto.css";

const ProductPhoto = ({ photos = [] }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [showChosenPhoto, setShowChosenPhoto] = useState(false);

  const [mainPhoto = "https://via.placeholder.com/800", ...restPhotos] = photos;

  const showPhoto = (
    <div className="showBigPhoto">
      <img src={photos[selectedPhotoIndex]} />
      <button
        className="btn close-photo"
        onClick={() => {
          setShowChosenPhoto(false);
        }}
      >
        close
      </button>
    </div>
  );

  return (
    <>
      {showChosenPhoto && showPhoto}
      {!showChosenPhoto && (
        <>
          <div
            className="product-page-photo"
            onPointerUp={({ target }) => {
              if (target.className === "slide selected")
                setShowChosenPhoto(true);
              // document.body.overflow = 'unset'
            }}
          >
            <Carousel
              showStatus={false}
              renderThumbs={(childs) => {
                return;
              }}
              selectedItem={selectedPhotoIndex}
              onChange={(photoIndex) => {
                setSelectedPhotoIndex(photoIndex);
              }}
            >
              {photos?.map((photoUrl) => {
                return (
                  <img src={photoUrl} alt="product" data-photo-url={photoUrl} />
                );
              })}
            </Carousel>
          </div>
          <div className="hide-scroll-top">
            <div className="hide-scroll">
              <div className="carousel">
                {photos?.map((photoUrl, photoIndex) => {
                  return (
                    <div
                      key={photoUrl.slice(-5)}
                      className={`carousel-photo ${
                        photoIndex == selectedPhotoIndex ? "active" : ""
                      } `}
                      onClick={(e) => {
                        setSelectedPhotoIndex(photoIndex);
                      }}
                    >
                      <img src={photoUrl} alt="product" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

ProductPhoto.propTypes = {};

export default ProductPhoto;

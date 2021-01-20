import Button from "../components/Button";
import SeeMoreProducts from "../components/SeeMoreProducts";
import FilterColors from "../components/FilterColors";
import Review from "../components/Review";
import WriteReview from "../components/WriteReview";
import Container from "../components/Container";
import UtilsBlock from "../components/UtilsBlock";

import { createProduct } from "../firebase/db";

import addFavorites from "../assets/addFavorites.svg";
import productPhoto from "../assets/product-image-big.jpg";

import "./ProductPage.css";

const ProductPage = (props) => {
  //   createProduct(
  //     `Self Lacing Battery Shoes
  //     mmid iately show that`,
  //     `The Nike Air Zoom SuperRep 2 is designed for circuit training, HIIT and other fast-paced exercise. Layers of support team up with Zoom Air cushioning to keep your foot locked in and comfortable as you lunge, jump and push your way through every rep.`,
  //     125
  //   );

  return (
    <div className="product-page">
      <Container>
        <UtilsBlock share />

        <div className="product-page-content">
          <section className="product-page-photo-block">
            <div className="product-page-photo">
              <img src={productPhoto} alt="product" />
            </div>
            <div className="hide-scroll-top">
              <div className="hide-scroll">
                <div className="carousel">
                  <div className="carousel-photo">
                    <img src={productPhoto} alt="product carousel" />
                  </div>
                  <div className=" carousel-photo active">
                    <img src={productPhoto} alt="product carousel" />
                  </div>
                  <div className="carousel-photo">
                    <img src={productPhoto} alt="product carousel" />
                  </div>
                  <div className="carousel-photo">
                    <img src={productPhoto} alt="product carousel" />
                  </div>
                  <div className="carousel-photo">
                    <img src={productPhoto} alt="product carousel" />
                  </div>
                  <div className="carousel-photo">
                    <img src={productPhoto} alt="product carousel" />
                  </div>
                </div>
              </div>
            </div>
            <SeeMoreProducts />
          </section>
          {/* product-page-photo block end */}
          <section className="product-page-desc-block">
            <h1 className="product-page-price">125$</h1>

            <h2 className="product-page-title">
              Self Lacing Battery Shoes mmid iately show that
            </h2>
            <p className="product-page-desc">
              The Nike Air Zoom SuperRep 2 is designed for circuit training,
              HIIT and other fast-paced exercise. Layers of support team up with
              Zoom Air cushioning to keep your foot locked in and comfortable as
              you lunge, jump and push your way through every rep.
            </p>
            <div className="product-page-sizes">
              <div className="sub-block">
                <span className="sub-block-title">sizes</span>
                <span className="sub-block-guide">
                  <a href="#">Size guide</a>
                </span>
              </div>
              <div className="sizes-self">
                {
                  <>
                    <div className="row">
                      {" "}
                      {sizes.slice(0, 5).map((size) => {
                        return (
                          <div className="size">
                            <span>{size}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="row">
                      {" "}
                      {sizes.slice(5).map((size) => {
                        return (
                          <div className="size">
                            <span>{size}</span>
                          </div>
                        );
                      })}
                    </div>
                  </>
                }
              </div>
            </div>

            <div className="product-page-colors">
              <div className="sub-block">
                <span className="sub-block-title">Colors</span>
              </div>
              <FilterColors style={{ padding: "7%", marginRight: "7%" }} />
            </div>

            <div className={"product-page-actions"}>
              <Button type="big primary-button rounded" text="add to cart" />
              <Button type="big secondary rounded" text="add to Favorites" />
            </div>

            <div className="product-page-reviews">
              <WriteReview />
              <Review />
              <Review />
            </div>
          </section>{" "}
          {/* product-page-desc end */}
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;

const sizes = [
  "32/21",
  "32/21",
  "32/21",
  "32/21",
  "32/21",
  "32/21",
  "32/21",
  "32/21",
  "32/21",
  "32/21",
];

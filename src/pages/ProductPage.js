import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import Button from "../components/Button";
import SeeMoreProducts from "../components/SeeMoreProducts";
import ChooseColors from "../components/ChooseColors";
import Reviews from "../components/Reviews";
import WriteReview from "../components/WriteReview";
import Container from "../components/Container";
import UtilsBlock from "../components/UtilsBlock";
import AddToCart from "../components/AddToCart";
import AddToFavorites from "../components/AddToFavorites";
import SizesComponent from "../components/SizesComponent";
import ProductPhoto from "../components/ProductPhoto";

import { createProduct, getProduct } from "../firebase/db";
import useStorage from "../storage";
import { useReviewsControl } from "../firebase/db";
import "./ProductPage.css";
import ChooseSizes from "../components/ChooseSizes";

const ProductPage = (props) => {
  const [state, dispatch] = useStorage();
  const [download, setDownload] = useState(false);
  const [product, setProduct] = useState({});
  const [errors, setErrors] = useState({});
  const [activeSize, setActiveSize] = useState(null);
  const [activeColor, setActiveColor] = useState(null);

  const { id } = useParams();
  const reviewControl = useReviewsControl(id);

  useEffect(() => {
    console.log("mouted Product Page");
    return () => {
      console.log("Unmounted piece of shit mother fucker");
    };
  }, []);

  let {
    title = "No title Entered",
    desc: description = "No description entered",
    colors = [],
    price = 0,
    sizes = [],
    tags = [],
  } = product;

  useEffect(() => {
    console.log("it runs in product page");
    const productFromState = state.products.find((product) => {
      return product.id === id;
    });
    if (productFromState) {
      console.log(id);

      setProduct(productFromState);
    } else {
      setDownload(true);
      getProduct(id)
        .then((doc) => {
          setProduct(doc.data());
          setDownload(false);
        })
        .catch((error) => {
          setErrors({ errorDB: error.message });
          setDownload(false);
        });
    }
  }, [id]);
  //   createProduct(
  //     `Self Lacing Battery Shoes
  //     mmid iately show that`,
  //     `The Nike Air Zoom SuperRep 2 is designed for circuit training, HIIT and other fast-paced exercise. Layers of support team up with Zoom Air cushioning to keep your foot locked in and comfortable as you lunge, jump and push your way through every rep.`,
  //     125
  //   );
  const seeMoreProductsBlock = (
    <SeeMoreProducts
      tags={tags}
      currentProductPageId={id}
      className={`see-more-block`}
    />
  );

  return (
    <div className="product-page">
      <Container>
        <UtilsBlock share />

        {download ? (
          <h1>Downloading...</h1>
        ) : errors?.errorDB ? (
          <div styles={{ fontSize: "1.5rem", color: "red" }}>
            {errors.errorDB}
          </div>
        ) : (
          <div className="product-page-content">
            <section className="product-page-left-block">
              <ProductPhoto photos={product?.photoUrls} />
              <div className="see-more-desktop">
                {
                  seeMoreProductsBlock /* <SeeMoreProducts/> it is called before return, due to be used in few places */
                }
              </div>
            </section>
            {/* product-page-photo block end */}
            <section className="product-page-desc-block">
              <div className="product-title-price">
                <div className="title-subtitle">
                  <h4>{tags?.[0]}</h4>
                  <h2 className="product-page-title">{title}</h2>
                </div>
                <h1 className="product-page-price">{price}$</h1>
              </div>
              <p className="product-page-desc">{description}</p>

              {
                /* sizes block */
                sizes.length > 0 && (
                  <div className="product-page-sizes">
                    <ChooseSizes
                      sizes={sizes}
                      updateParent={setActiveSize}
                      error={errors.size}
                    />
                  </div>
                )
              }

              {/* colors block */}
              {colors.length > 0 && (
                <div className="product-page-colors">
                  <div className="sub-block">
                    <span className="sub-block-title">Colors</span>
                  </div>
                  <ChooseColors
                    error={errors?.color}
                    style={{ padding: "7%", marginRight: "7%" }}
                    colors={colors}
                    updateParent={setActiveColor}
                  />
                </div>
              )}

              {/* Add to cart or save block */}
              <div className={"product-page-actions"}>
                <AddToCart
                  productId={id}
                  color={activeColor}
                  size={activeSize}
                  setErrors={setErrors}
                  product={product}
                />

                <AddToFavorites productId={id} />
              </div>

              {/* Reviews block */}
              <div className="product-page-reviews">
                <WriteReview productId={id} reviewControl={reviewControl} />
                <Reviews reviews={reviewControl.reviews} />
              </div>
            </section>
            <div className="see-more-mobile">
              {
                seeMoreProductsBlock /* <SeeMoreProducts/> it is called before return, due to be used in few places */
              }
            </div>
            {/* product-page-desc end */}
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductPage;

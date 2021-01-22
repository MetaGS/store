import { useEffect, useState } from "react";
import useStorage from "../storage";
import { WIDE_SEARCH, NORMAL_SEARCH, ADD_PRODUCTS } from "../storage/types";
import { addProducts } from "../storage/";

import Product from "../components/Product";

import { getProducts } from "../firebase/db";
import "./Products.css";

// const ACCESS_KEY = "LhyTBf3R-M3oegqMrSR1Z6oQWAcVYC32y0jFj3bvdm8";
// const SECRET_KEY = "kBc1NnR-ox59vU31q6iwcrQOv3ZqZ_3I9rH-vXjYnHE";

// const myHeaders = new Headers();
// myHeaders.append("Authorization", `Client-ID ${ACCESS_KEY}`);
// myHeaders.append("X-Total", "30");

const Products = (props) => {
  const [state, dispatch] = useStorage();
  const [products, setProducts] = useState([]);
  // console.log(state)

  useEffect(() => {
    // fetch(`https://api.unsplash.com/search/photos/?query=${'clothes'}&page=1&per_page=29&orientation=landscape`, {
    //     headers: myHeaders,
    // }).then((response) => {
    //     if (response.ok) {
    //         return response.json();
    //     } else {
    //         // catch an error
    //     }
    // }).then((json) => {
    //     // console.log(json);

    //     let photos = json?.results.reduce((returnValue, currentValue, index) => {

    //         if (index % 3 === 0) {
    //             returnValue.push([]);
    //         }
    //         returnValue[returnValue.length - 1].push(currentValue);
    //         return returnValue;
    //     }, [])
    //     // console.log(photos)
    //     dispatch({ type: ADD_PHOTOS, payload: photos })
    // })

    getProducts()
      .then((productsSnapshot) => {
        console.log(productsSnapshot);

        return Promise.all(
          /* actually promise.all here is not needed, because doc.data() is sync */
          productsSnapshot.docs.map((doc) => {
            const docWithId = doc.data();
            docWithId.id = doc.id;
            return docWithId;
          })
        ).then((productList) => {
          console.log(productList);
          //   throw Error("Bla bla bla error");
          dispatch(addProducts(productList));
          setProducts(productList);
        });
      })
      .catch((error) => {
        console.log(
          "%cError under ProductsPage",
          "color: red; font-size: 1.2rem;"
        );
        console.log(error.message);
      });
  }, []);

  return (
    <div className="products-list">
      {products?.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Products;

import { useState, useEffect } from "react";
import firebase from "firebase/app";
import { getProducts } from "./";

const useGetProducts = (limit = 10) => {
  const [downloading, setDownloading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!isNaN(limit)) {
      setDownloading(true);
      getProducts()
        .limit(limit)
        .get()
        .then((snapshot) => {
          let products = snapshot.docs.map((productSnap) => {
            return { ...productSnap.data(), id: productSnap.id };
          });
          console.log("products", products);
          setProducts(products);
          setDownloading(false);
        })
        .catch((error) => {
          console.log(
            "%c Here is an Error in useGetProducts",
            "color: red; font-size:1.2rem"
          );
          console.trace();
          console.log(error.message);
          setDownloading(false);
        });
    }
    return () => {};
  }, [limit]);

  return { downloading, products };
};

export default useGetProducts;

import { useEffect, useState } from "react";
import { getRelatedProducts, getProducts as getAllProducts } from "./";

const useGetRelatedProducts = (
  field,
  relationArray,
  ifNoRelationReturnOther = false
) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState(null);

  console.log(
    "%c +++++++debug useGetRelatedProducts++++++++",
    "color: green; font-size: 1.2rem;"
  );

  useEffect(() => {
    if (relationArray?.length !== 0) {
      setDownloading(true);
      getRelatedProducts(field, relationArray)
        .get()
        .then((productsSnapshot) => {
          const { docs } = productsSnapshot;
          const actualProducts = docs.map((doc) => {
            return { ...doc?.data(), id: doc.id };
          });

          console.log("got result");
          console.log(productsSnapshot);
          if (actualProducts.length > 0) {
            setRelatedProducts(actualProducts);
            setDownloading(false);
            return;
          }

          if (ifNoRelationReturnOther) {
            return getAllProducts()
              .limit(10)
              .get()
              .then((snapshot) => {
                const allProducts = snapshot.docs.map((doc) => {
                  return { ...doc.data(), id: doc.id };
                });

                setRelatedProducts(allProducts);
                setDownloading(false);
              });
          }
        })
        .catch((error) => {
          console.log("%c Error happened in useGetRelations", "color: red");
          console.log(error?.message);
          setDownloading(false);
          setError(error);
        });
    }

    return () => {};
  }, [relationArray]);

  return { relatedProducts, downloading, error };
};

export default useGetRelatedProducts;

import firebase from "firebase/app";

function getProductsWithFilters(filters = [], sorts = []) {
  const db = firebase.firestore();

  console.log(filters);
  let products = db.collection("products");
  let priceWhere = false;

  filters.forEach(({ field, comparison, value }) => {
    // where
    if (field === "price") {
      priceWhere = true;
    }
    if (!!field && !!comparison && !!value) {
      console.log(field);
      console.log(comparison);
      console.log(value);
      products = products.where(field, comparison, value);
    }
  });

  //   sorts.forEach((sort) => {
  //     if (priceWhere) {
  //       products.orderBy("price", "asc");
  //     }

  //     if (sort?.value !== "discount" && sort) {
  //       if (sort.value === "price") {
  //         products = products.orderBy(sort.value, sort.order);
  //       }
  //       if (sort.value === "rating") {
  //         products = products.orderBy(sort.value, sort.order);
  //       }
  //       if (sort.value === "createdAt") {
  //         products = products.orderBy(sort.value, sort.order);
  //       }
  //     }
  //   });

  return products;
}

export default getProductsWithFilters;

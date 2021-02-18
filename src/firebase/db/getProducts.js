import firebase from "firebase/app";

export const getProducts = (sorts = []) => {
  const db = firebase.firestore();

  let products = db.collection("products");

  // const myExtension = Object.create(products);
  // myExtension.isOwnExtension = "Yeas it is an extension";
  return products;
};

export const getRelatedProducts = (field, relationArray) => {
  //relation array must be something, [kids, games, boys, woman] or color [red, white] etc
  const relatedProducts = getProducts().where(field, "in", relationArray);
  return relatedProducts;
};

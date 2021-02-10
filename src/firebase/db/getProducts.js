import firebase from "firebase/app";

function getProducts(sorts = []) {
  const db = firebase.firestore();

  let products = db.collection("products");

  const myExtension = Object.create(products);
  myExtension.isOwnExtension = "Yeas it is an extension";
  return myExtension;
}

export default getProducts;

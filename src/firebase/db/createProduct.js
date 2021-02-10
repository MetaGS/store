import firebase from "firebase/app";
import "firebase/firestore";

const createProduct = (
  title,
  desc,
  price,
  sizes = [],
  colors = [],
  tags = [],
  discount = false,
  discountPercentage = 0
) => {
  let db = firebase.firestore();

  return db
    .collection("products")
    .add({
      title,
      desc,
      price: Number(price),
      sizes,
      colors,
      photoUrls: [],
      rating: 0,
      ratings: [],
      reviews: [],
      discount,
      discountPercentage: Number(discountPercentage),
      tags,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((doc) => {
      console.log(doc);
      return doc;
    });
  //
};

export default createProduct;

import firebase from "firebase/app";
import "firebase/firestore";

export default (title, desc, price, sizes, colors) => {
  let db = firebase.firestore();
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //       console.log("resolved");
  //       res(5);
  //     }, 5000);
  //   });
  return db
    .collection("products")
    .add({
      title,
      desc,
      price,
      sizes,
      colors,
      photoUrls: [],
      rating: [],
      reviews: [],
    })
    .then((doc) => {
      console.log(doc);
      return doc;
    });
  //
};

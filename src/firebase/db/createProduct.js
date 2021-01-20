import firebase from "firebase/app";
import "firebase/firestore";

export default (title, desc, price, photoUrls, sizes, colors) => {
  let db = firebase.auth();
  return db
    .collection("products")
    .add({
      title,
      desc,
      price,
      photoUrls,
      sizes,
      colors,
    })
    .then((doc) => {
      console.log(doc);
      return doc;
    });
};

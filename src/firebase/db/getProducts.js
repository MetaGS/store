import firebase from "firebase/app";

export default function () {
  const db = firebase.firestore();

  const products = db
    .collection("products")
    .get()
    .then((snap) => {
      console.log(snap.docs);
      return snap;
    });

  return products;
}

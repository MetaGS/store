import firebase from "firebase/app";

export default (id) => {
  const db = firebase.firestore();

  const product = db
    .collection("products")
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("%cExists", "color: green");
        return doc;
      } else {
        throw Error("No such Document in Collection");
      }
    })
    .catch((error) => {
      console.log(
        "%cError in getProduct under db Firebase",
        "color: red; font-size: 1.2rem;"
      );
      console.log(error.message);
      throw error;
    });

  return product;
};

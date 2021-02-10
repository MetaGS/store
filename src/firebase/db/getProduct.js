import firebase from "firebase/app";

const getProduct = (id) => {
  const db = firebase.firestore();

  console.log(id);
  const product = db
    .collection("products")
    .doc(id)
    .get()
    .then((doc) => {
      console.error(id);

      if (doc.exists) {
        console.log("%cExists", "color: green");
        return doc;
      } else {
        console.log("here will be error");
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

export default getProduct;

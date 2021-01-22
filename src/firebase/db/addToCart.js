import firebase from "firebase/app";

export default (productId, userId) => {
  const db = firebase.firestore();

  const userRef = db.collection("users").doc(userId);
  const userCart = userRef.get().then((userDoc) => {
    if (userDoc.data().cart.includes(productId)) {
      throw Error("Already In the cart");
    }

    return userRef.update({ cart: [...userDoc.data().cart, productId] });
  });

  return userCart;
};

// IMPORTANT! later in production move this to firebase functions;

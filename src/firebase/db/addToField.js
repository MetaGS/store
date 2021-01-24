import firebase from "firebase/app";

export default (productId, userId, field) => {
  const db = firebase.firestore();

  const userRef = db.collection("users").doc(userId);
  const userField = userRef
    .get()
    .then((userDoc) => {
      if (userDoc.data()[field].includes(productId)) {
        throw Error("Already In the field");
      }

      return userRef.update({ [field]: [...userDoc.data()[field], productId] });
    })
    .then((docRef) => {
      console.log(
        `%c Added to The ${field}`,
        "color: green; font-size: 1.2rem;"
      );
      console.log(docRef);
      return docRef;
    })
    .catch((error) => {
      console.log("%cError", "font-size: 1.2rem; color: red");
      console.log(error.message);
      throw error;
    });

  return userField;
};

// IMPORTANT! later in production move this to firebase functions;

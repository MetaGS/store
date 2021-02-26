import firebase from "firebase/app";

export default (productId, userId, field) => {
  //setup db connection and collection
  const db = firebase.firestore();
  const userRef = db.collection("users").doc(userId);

  //main logic in addition to db field
  const userField = userRef
    .get()
    .then((userDoc) => {
      if (userDoc.data()[field].includes(productId)) {
        throw Error("Already In the field");
      }

      return userRef.update({ [field]: [...userDoc.data()[field], productId] });
    })

    //secondary block, just confirming the addition and returning, if error throwing
    .then((docRef) => {
      //update doesn return anything
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

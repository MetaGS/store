import firebase from "firebase/app";
import updateUserField from "./updateUserField";

export default (productId, userId, field) => {
  const db = firebase.firestore();
  const userRef = db.collection("users").doc(userId);

  // const filter = (fieldDb, updateArray) => {
  //   return dbField.filter((idsInField) => {
  //     return idsInField !== productId;
  //   });
  // };

  // const removeFromField = updateUserField(
  //   userId,
  //   field,
  //   productId,
  //   undefined,
  //   filter
  // );

  const fieldResponse = userRef
    .get()
    .then((doc) => {
      const dbField = doc.data()[field];
      if (dbField.includes(productId)) {
        console.log(doc);

        return userRef
          .update({
            [field]: dbField.filter((idsInField) => {
              return idsInField !== productId;
            }),
          })
          .then((response) => {
            console.log(response);
            return response;
          });
      } else {
        throw Error("There is no such item in field");
      }
    })
    .then((response) => {
      console.log(`%cRemoved from ${field}`, "font-size: 1.2rem; color: green");

      return response;
    })
    .catch((error) => {
      console.log(
        `%cError in removing from ${field}`,
        "color: red; font-size: 1.2rem"
      );
      console.log(error.message);
    });

  return fieldResponse;
};

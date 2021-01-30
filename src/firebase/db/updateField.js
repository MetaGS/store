import firebase from "firebase/app";

export default (userId, field, updateFieldArray) => {
  const db = firebase.firestore();
  const userRef = db.collection("users").doc(userId);

  return userRef.get().then((userDoc) => {
    const oldField = userDoc.data()[field];

    const newField = [
      ...updateFieldArray.filter((newItem) => {
        return !oldField.includes(newItem);
      }),
      ...oldField,
    ];

    return userRef
      .update({
        [field]: newField,
      })
      .then(() => {
        console.log("Updated the whole field and Filtered");
        console.log(newField);
      })
      .catch((error) => {
        console.log(
          "%c Here is Error on Update Whole field",
          "color: red; font-size: 1.2rem;"
        );
        console.log(error.message);
      });
  });
};

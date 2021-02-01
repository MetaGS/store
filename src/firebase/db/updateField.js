import firebase from "firebase/app";

export default (collectionName, docId, field, updateItem) => {
  const db = firebase.firestore();
  const docRef = db.collection(collectionName).doc(docId);
  let updateArray = Array.isArray(updateItem) ? updateItem : [updateItem];

  return docRef.get().then((doc) => {
    const oldField = doc.data()[field] || [];

    const newField = [
      ...updateArray.filter((newItem) => {
        return !oldField.includes(newItem);
      }),
      ...oldField,
    ];

    return docRef
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

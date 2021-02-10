import firebase from "firebase/app";

const updateField = (
  collectionName,
  docId,
  field,
  updateItem,
  callBack = (data) => ({}) // callback must return object with fields to update
) => {
  const db = firebase.firestore();
  const docRef = db.collection(collectionName).doc(docId);
  let updateArray = Array.isArray(updateItem) ? updateItem : [updateItem];

  return docRef.get().then((doc) => {
    const allDataFromDb = doc.data();
    const additionalUpdate = callBack(allDataFromDb);
    const oldField = allDataFromDb[field] || [];

    // main logic: update field which you set
    const newField = [
      ...updateArray.filter((newItem) => {
        return !oldField.includes(newItem);
      }),
      ...oldField,
    ];

    // update other fields as well if you want, through callback
    const updateObject = {
      ...{
        [field]: newField,
      },
      ...additionalUpdate,
    };

    return docRef
      .update(updateObject)
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

export default updateField;

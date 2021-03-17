import firebase from "firebase/app";

const defaultFilter = (oldField, updateArray) => {
  return [
    ...updateArray.filter((newItem) => {
      return !oldField.includes(newItem);
    }),
    ...oldField,
  ];
};

const updateField = (
  collectionName,
  docId,
  field,
  updateItem = [],
  callBack = (data) => ({}), // callback must return object with fields to update
  filter = defaultFilter
) => {
  const db = firebase.firestore();
  const docRef = db.collection(collectionName).doc(docId);
  let updateArray = Array.isArray(updateItem) ? updateItem : [updateItem];

  return docRef
    .get()
    .then((doc) => {
      const allDataFromDb = doc.data();
      //additional callback is to updatate additional fields in db, but it should not interfere with main doc field, which you
      // initially referring
      const additionalUpdate = callBack(allDataFromDb);
      const oldField = allDataFromDb[field] || [];

      // main logic: update field which you set
      const newField = filter(oldField, updateArray);

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
          return true;
        })
        .catch((error) => {
          console.log(
            "%c Here is Error on Update While updating",
            "color: red; font-size: 1.2rem;"
          );
          console.log(error.message);
          throw error;
        });
    })
    .catch((error) => {
      console.log("%c Error in updateField", "color:red; font-size:1.2rem;");
      console.log(
        `%c${error.message}`,
        "padding-bottom:5px;border-bottom: 1px solid red;"
      );
      return false;
    });
};

export default updateField;

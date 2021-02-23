import firebase from "firebase/app";

const submitQuestionToDb = (token, email, question) => {
  const db = firebase.firestore();
  const questionsCollection = db.collection("questions");

  return questionsCollection
    .add({
      token,
      email,
      question,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((refToDoc) => {
      console.log(
        "%c Question sumbitted to the server",
        "color: green; font-size:1.2rem;"
      );
      console.log(refToDoc);
      return refToDoc;
    })
    .catch((error) => {
      console.log(
        "%c Error happened in userQuestionsSubmit",
        "color: red; font-size:1.2rem;"
      );
      return false;
    });
};

export default submitQuestionToDb;

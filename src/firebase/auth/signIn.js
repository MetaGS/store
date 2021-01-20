import firebase from "firebase/app";

export default (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

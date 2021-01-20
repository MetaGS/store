import firebase from "firebase/app";

export default function (email, password, displayName) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log("here start");
      return user.updateProfile({
        displayName,
      });
    });
  // catch errors on place where it called
}

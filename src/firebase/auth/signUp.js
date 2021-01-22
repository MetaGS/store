import firebase from "firebase/app";

export default function (email, password, displayName = "noName entered") {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      console.log(response);
      return firebase
        .firestore()
        .collection("users")
        .doc(response.user.uid)
        .set({ name: displayName, cart: [] });
    });
  // catch errors on place where it called
}

import firebase from "firebase/app";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import useStorage from "../../storage";
import { signIn, signOut, addToCartDispatch } from "../../storage/actions";

export { default as signUp } from "./signUp";
export { default as signOut } from "./signOut";
export { default as signIn } from "./signIn";

export default () => {
  const history = useHistory();
  const [state, dispatch] = useStorage();
  const db = firebase.firestore();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(signIn(user));

        console.log("%csigned in", "color:green; font-weight: 600");
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            dispatch(addToCartDispatch(doc.data().cart));
          })
          .catch((error) => {
            console.log("%cerrrrror", "font-size:1.2rem; color: red");
            console.log(error.message);
          });
        console.log("%c-------------block", "color:green; font-weight: 600");
      } else {
        dispatch(signOut());
      }
    });
    return () => {};
  }, []);
};

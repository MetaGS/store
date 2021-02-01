import useControlField from "../auth";
import firebase from "firebase/app";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import useStorage from "../../storage";
import {
  signIn,
  signOut,
  addToCartAction,
  addToFavoritesAction,
} from "../../storage/actions";
import { updateUserField as updateFieldInDb } from "../db";
import LocalStorage from "../../localStorage";

export { default as signUp } from "./signUp";
export { default as signOut } from "./signOut";
export { default as signIn } from "./signIn";
console.log("new local storage control");
const localStorageFavoritesControl = new LocalStorage("favorites");
const localStorageCartControl = new LocalStorage("cart");

export default () => {
  const history = useHistory();
  const [state, dispatch] = useStorage();
  const db = firebase.firestore();

  useEffect(async () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(signIn(user));

        console.log("%csigned in", "color:green; font-weight: 600");
        const userRef = db.collection("users").doc(user.uid);
        let localFavorites = localStorageFavoritesControl.getField();
        let localCart = localStorageCartControl.getField();
        console.log(localFavorites);

        new Promise((resolve, reject) => {
          if (localFavorites.length !== 0 || localCart.length !== 0) {
            if (localFavorites.length !== 0) {
              updateFieldInDb(user.uid, "favorites", localFavorites);

              localStorageFavoritesControl.setField([]);
            }
            if (localCart.length !== 0) {
              updateFieldInDb(user.uid, "cart", localCart);

              localStorageCartControl.setField([]);
            }
            resolve("updated");
          } else {
            resolve("No need in update");
          }
        }).then((updatedMessage) => {
          console.log(updatedMessage);
          userRef
            .get()
            .then((doc) => {
              if (doc.exists) {
                dispatch(addToCartAction(doc.data().cart));
                console.log("run");
                dispatch(addToFavoritesAction(doc.data().favorites));
              }
            })
            .catch((error) => {
              console.log("%cerrrrror", "font-size:1.2rem; color: red");
              console.log(error.message);
            });
        });
      } else {
        dispatch(signOut());
        dispatch(
          addToFavoritesAction(localStorageFavoritesControl.getField?.())
        );
        dispatch(addToCartAction(localStorageCartControl.getField?.()));
      }
    });
  }, []);
};

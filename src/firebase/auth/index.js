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
  addCartOrderAction,
  setCartOrders,
} from "../../storage/actions";
import { updateUserField, mergeCartOrders } from "../db";
import LocalStorage, { LocalCart } from "../../localStorage";

export { default as signUp } from "./signUp";
export { default as signOut } from "./signOut";
export { default as signIn } from "./signIn";

console.log("new local storage control");
const localStorageFavoritesControl = new LocalStorage("favorites");
const localStorageCartControl = new LocalStorage("cart");
const localStorageCartOrdersControl = new LocalStorage("cartOrders");

export default () => {
  const history = useHistory();
  const [state, dispatch] = useStorage();
  const db = firebase.firestore();

  let localFavorites = localStorageFavoritesControl.getField();
  let localCart = localStorageCartControl.getField();
  let localCartOrders = localStorageCartOrdersControl.getField();

  useEffect(async () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(signIn(user));

        //setup db connection and get fields from localStorage
        const userRef = db.collection("users").doc(user.uid);

        //main logic if user is signed in
        new Promise((resolve, reject) => {
          if (localFavorites.length !== 0) {
            updateUserField(user.uid, "favorites", localFavorites);
            localStorageFavoritesControl.setField([]);
          }
          if (localCart.length !== 0) {
            updateUserField(user.uid, "cart", localCart);
            localStorageCartControl.setField([]);
          }

          if (localCartOrders.length !== 0) {
            mergeCartOrders(user.uid, "cartOrders", localCartOrders);
            localStorageCartOrdersControl.setField([]);
          }
          //----------
          if (localFavorites.length !== 0 || localCart.length !== 0)
            resolve("No need in update");
          else resolve("up to date");
        }).then((updatedMessage) => {
          // check if there is no error and if so, update appSessionStorage ['useReducer', not localstorage ]
          userRef
            .get()
            .then((doc) => {
              if (doc.exists) {
                const dbFields = doc.data();
                dispatch(addToCartAction(dbFields.cart ?? []));
                dispatch(addToFavoritesAction(dbFields.favorites ?? []));
                dispatch(setCartOrders(dbFields.cartOrders ?? []));
              }
            })
            .catch((error) => {
              console.log("%cerrrrror", "font-size:1.2rem; color: red");
              console.log(error.message);
            });
        });
      } else {
        console.log(
          "%cLoooog OUUUUt",
          "color:green; font-size:1.2rem;padding-bottom:5px;border-bottom: 1px solid green;"
        );

        dispatch(signOut());
        dispatch(addToFavoritesAction(localFavorites));
        dispatch(addToCartAction(localCart));
        dispatch(setCartOrders(localCartOrders));
      }
    });
  }, []);
};

import { useEffect, useState } from "react";
import firebase from "firebase/app";
import useStorage from "../../storage";
import { updateUserField } from "../db";
import { updateProductsField } from "../db";
import updateProductField from "./updateProductField";

export default (productId) => {
  const [state, dispatch] = useStorage();
  const db = firebase.firestore();
  const reviewsCollection = db.collection("reviews");
  const [, updateCaller] = useState();
  const [control, setControl] = useState({});

  useEffect(() => {
    setControl(
      state.userSignedIn
        ? new ControlUploadReview(
            db,
            reviewsCollection,
            state.user?.uid,
            productId,
            dispatch,
            state,
            updateCaller
          )
        : new Proxy({}, handler)
    );
  }, [state.user]);
  return control;
};

class ControlUploadReview {
  constructor(
    db,
    collection,
    userId,
    productId,
    dispatch,
    state,
    updateCaller
  ) {
    this.db = db;
    this.collection = collection;
    this.userId = userId;
    this.productId = productId;
    this.dispatch = dispatch;
    this.state = state;
    this.updateCaller = updateCaller;
    this.alreadyReviewed = false;
    this.reviewRef = null;
    this.checkReviewed();
  }

  checkReviewed() {
    this.collection
      .where("userId", "==", this.userId)
      .get()
      .then((snapshot) => {
        console.log(snapshot);
        const reviewed = !!snapshot.docs[0]?.exists;
        this.alreadyReviewed = reviewed;
        if (reviewed) {
          this.reviewRef = snapshot.docs[0].ref;
        }
        console.log(this.alreadyReviewed);
        this.updateCaller(Math.random());
      });
  }

  showReviewed() {
    return this.alreadyReviewed;
  }

  submitReview(text, phoneNumber, rate) {
    const userRef = this.db.collection("users").doc(this.userId);
    const productRef = this.db.collection("products").doc(this.productId);

    // updateProductsField, updateUsersField
    this.collection.get().then((snapshotDocs) => {
      console.log(snapshotDocs);

      //   this.collection.add({
      //     text: text,
      //     phoneNumber,
      //     rate,
      //     userId: this.userId,
      //     productId: this.productId,
      //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      //   })
      //   .then((doc) => {
      //     console.log(doc);
      //     // update user doc and product doc
      //     Promise.all([
      //       updateUserField(this.userId, "reviews", doc.id),
      //       updateProductField(this.productId, "reviews", doc.id),
      //     ]).then((response) => {
      //       console.log("updated succesfully");
      //       console.log(response);
      //     });
      //   });
    });
  }
}

const handler = {
  get(control, prop) {
    return new Promise((res, rej) => {
      rej("The user need to sign in first");
    }).catch((error) => {
      console.log(
        "%c Sign inn First Called useReview upload control",
        "font-size: 1.2rem; color: red"
      );
      return error;
    });
  },
};

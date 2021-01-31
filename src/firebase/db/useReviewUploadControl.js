import { useEffect, useState } from "react";
import firebase from "firebase/app";
import useStorage from "../../storage";

export default (productId) => {
  const [state, dispatch] = useStorage();
  const db = firebase.firestore();
  const reviewsCollection = db.collection("reviews");

  const [control, setControl] = useState({});

  useEffect(() => {
    setControl(
      new ControlUploadReview(
        db,
        reviewsCollection,
        state.user?.uid,
        productId,
        dispatch,
        state
      )
    );
  }, [state.user]);
};

class ControlUploadReview {
  constructor(db, collection, userId, productId, dispatch, state) {
    this.db = db;
    this.collection = collection;
    (this.userId = userId), (this.productId = productId);
    this.dispatch = dispatch;
    this.state = state;
  }
}

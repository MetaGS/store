import { useEffect, useState } from "react";
import firebase from "firebase/app";
import useStorage from "../../storage";
import { updateUserField } from ".";
import { updateProductsField } from ".";
import updateProductField from "./updateProductField";

let initialSetup = {
  listeners: [],
  alreadyReviewed: true,
  loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (productId) => {
  const [state, dispatch] = useStorage();
  const db = firebase.firestore();
  const reviewsCollection = db.collection("reviews");
  const [, updateCaller] = useState();
  const [control, setControl] = useState(initialSetup);

  useEffect(() => {
    setControl(
      state.userSignedIn
        ? new ControlReviews(
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

    return () => {
      control.listeners?.forEach?.((unsubscribelistener) =>
        unsubscribelistener()
      );
    };
  }, [state.user]);
  return control;
};

class ControlReviews {
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
    this.userId = userId;
    this.productId = productId;
    this.allReviewsCollection = collection;
    this.collection = collection.where("productId", "==", this.productId);
    this.dispatch = dispatch;
    this.state = state;
    this.loading = initialSetup.loading;
    this.reviews = [];
    this.updateCaller = () => {
      updateCaller(Math.random());
    };
    this.alreadyReviewed = initialSetup.alreadyReviewed;
    this.reviewRef = null;
    this.listeners = initialSetup.listeners;
    this.checkReviewed().then((response) => {
      this.updateCaller();
    });
    this.downloadReviews();
  }

  checkReviewed() {
    return this.collection
      .where("userId", "==", this.userId)
      .get()
      .then((snapshot) => {
        const reviewed = !!snapshot.docs[0]?.exists;
        console.log(reviewed);
        this.alreadyReviewed = reviewed;
        if (reviewed) {
          this.reviewRef = snapshot.docs[0].ref;
        }
        this.loading = false;
        this.updateCaller(Math.random());
      });
  }

  downloadReviews = () => {
    const subscribeToReviewsChanges = this.collection.onSnapshot(
      (snapshot) => {
        console.log("onSnapshot runs...");
        const reviews = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        console.log(reviews);
        this.reviews = reviews;
        this.updateCaller(Math.random());
      },
      (error) => {
        console.log(
          "%c Error thrown on dowloadReviews",
          "font-size:1.2rem; color: red;"
        );
        console.log(error.message);
        return error;
      }
    );

    this.listeners.push(subscribeToReviewsChanges);
  };

  showReviewed() {
    return this.alreadyReviewed;
  }

  submitReview(text, phoneNumber, rate) {
    // updateProductsField, updateUsersField
    //  TODO: Add db rule, so it checks that one buyer can only add once;
    //
    // this.collection.get().then((snapshotDocs) => {
    //   console.log(snapshotDocs);

    this.allReviewsCollection //this collection includes other product reviews as well
      .add({
        text: text,
        phoneNumber,
        rate: Number(rate),
        userId: this.userId,
        productId: this.productId,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        console.log(doc);
        // update user doc and product doc
        Promise.all([
          updateUserField(this.userId, "reviews", doc.id),
          updateProductField(
            this.productId,
            "reviews",
            doc.id,
            (dataFromDb) => {
              const ratingsArrayFromDb = !!dataFromDb?.ratings
                ? dataFromDb.ratings
                : [];
              const newRatingsArray = [...ratingsArrayFromDb, Number(rate)];
              const newRating = newRatingsArray.reduce((prev, current) => {
                return (prev += current);
              }, 0);
              const updatedRatings = {
                ratings: newRatingsArray,
                rating: newRating,
              };
              return updatedRatings;
            }
          ), //NOTE:do not change reviews field in dataFromDb
        ]).then((response) => {
          console.log("updated succesfully");
          console.log(response);
        });
      });
    // });
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

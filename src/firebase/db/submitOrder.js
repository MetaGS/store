import firebase from "firebase/app";

const addOrder = (order) => {
  const collection = firebase.firestore().collection("orders");

  const orderAddedInformation = { ...order, completed: false };

  const responseToSubmit = collection
    .add({ orderAddedInformation })
    .then((reference) => {
      console.log(reference);
      console.log(
        "%cI guess order submitted",
        "color:green; font-size:1.2rem;padding-bottom:5px;border-bottom: 1px solid green;"
      );
      return reference;
    })
    .catch((error) => {
      console.log(
        "%cError happened in submitting order",
        "color:red; font-size:1.2rem;"
      );
      console.log(
        `%c${error.message}`,
        "padding-bottom:5px;border-bottom: 1px solid red;"
      );
      return { error };
    });
  return responseToSubmit;
};

export default addOrder;

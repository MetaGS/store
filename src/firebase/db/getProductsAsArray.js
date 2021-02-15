import { getProduct } from "./";

export default (field, state) => {
  console.log(state[field]);

  return Promise.all(
    state[field].map((fieldItemId) => {
      let itemIsDownloaded = state.products.find((product) => {
        return product.id === fieldItemId;
      });
      if (itemIsDownloaded) {
        return itemIsDownloaded;
      } else {
        return getProduct(fieldItemId).then((doc) => {
          return { ...doc.data(), id: doc.id };
        });
      }
    })
  ).catch((error) => {
    console.log(
      "%c Error happened in useDbField",
      "font-size: 1.2rem; color: red"
    );
    console.log(error.message);
    return [];
  });
};

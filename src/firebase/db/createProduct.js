import firebase from "firebase/app";
import "firebase/firestore";

const createProduct = ({
  title = "name",
  desc,
  price,
  sizes = [],
  colors = [],
  tags = [],
  discount = false,
  discountPercentage = 0,
  categories = [],
}) => {
  let db = firebase.firestore();
  console.log(tags);
  console.log(title);
  return db
    .collection("products")
    .add({
      title,
      desc,
      price: Number(price),
      sizes,
      colors,
      photoUrls: [],
      rating: 0,
      ratings: [],
      reviews: [],
      discount,
      discountPercentage: Number(discountPercentage),
      tags,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      categories,
    })
    .then((ref) => {
      // add the name/title of the product to search collection, so i can search by its title
      let titleToSearch = title.toLowerCase().split(" ");
      let productId = ref.id;

      db.collection("search")
        .add({
          searchKeys: titleToSearch,
          productRef: ref,
          productId,
        })
        .then((ref) => {
          console.log(
            "%c search terms added as well",
            "font-size: 1.2rem; color: green;"
          );
        })
        .catch((error) => {
          console.log("%c error", "color: red");
        });

      return ref;
    });
  //
};

export default createProduct;

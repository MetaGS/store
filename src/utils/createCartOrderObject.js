import sha256 from "sha256";
import firebase from "firebase/app";

const createOrderObject = ({
  productId,
  color,
  size,
  title,
  price,
  photoUrls,
}) => {
  return {
    cartOrderId: sha256(productId + String(color) + String(size)),
    productId,
    color,
    size,
    title,
    quantity: 1,
    image: photoUrls?.[0] ?? "https://via.placeholder.com/800",
    price: price ?? 0,
    createdAt: Date.now(),
  };
};

export default createOrderObject;

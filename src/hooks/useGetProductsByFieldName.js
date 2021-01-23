import { useState, useEffect } from "react";
import useStorage from "../storage";
import { getProductsAsArray } from "../firebase/db";

export default (field) => {
  const [state, dispatch] = useStorage();

  const [cartItems, setCartItems] = useState([]);
  // this function cheks state, and if there is then returns from local state, not then downloads from db;
  useEffect(() => {
    let cartList = getProductsAsArray(field, state).then(
      (cartItemsResolved) => {
        console.log(cartItemsResolved);
        setCartItems([...cartItemsResolved]);
      }
    );
  }, [state[field]]);

  return cartItems;
};

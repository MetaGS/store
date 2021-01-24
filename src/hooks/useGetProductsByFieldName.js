import { useState, useEffect } from "react";
import useStorage from "../storage";
import { getProductsAsArray } from "../firebase/db";

export default (field) => {
  const [state, dispatch] = useStorage();

  const [items, setItems] = useState([]);
  // this function cheks state, and if there is then returns from local state, not then downloads from db;
  useEffect(() => {
    console.log("Is Runned in update stage?");
    let itemList = getProductsAsArray(field, state).then((itemsResolved) => {
      console.log(itemsResolved);
      setItems([...itemsResolved]);
    });
  }, []);

  return items;
};

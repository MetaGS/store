import { useState } from "react";

export default function useInputList(prefix = "") {
  let [item, setItem] = useState("");
  let [items, setItems] = useState([]);

  const onAdd = (e) => {
    // debugger
    console.log("on add in useInputList called");
    if (item.trim() !== "") {
      const list = [...items, `${prefix}${item}`];
      console.log(`${prefix + item}`);
      console.log(list);
      setItems(list);
      setItem("");
    }
    console.log(items);
  };

  const backToItem = (index) => {
    return (e) => {
      setItem(items[index]);
      const list = items.slice(0, index);
      setItems(list);
    };
  };

  const onItemChange = (e) => {
    setItem(e.target.value);
  };

  return [
    {
      value: item,
      onChange: onItemChange,
    },
    {
      onClick: onAdd,
    },
    items,
    backToItem,
  ];
}

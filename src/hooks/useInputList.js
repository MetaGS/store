import { useState } from "react";

export default function useInputList(prefix = "") {
  let [item, setItem] = useState("");
  let [items, setItems] = useState([]);

  const onAdd = (value = item) => (e) => {
    // debugger

    console.log("on add in useInputList called");
    if (value.trim() !== "") {
      const list = [...items, `${prefix}${value}`];
      console.log(`${prefix + value}`);
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
      onKeyPress: onEnterPress(onAdd),
      onChoose: onAdd,
    },
    {
      onClick: onAdd(),
    },
    items,
    backToItem,
  ];
}

export const onEnterPress = (clickFunc) => (e) => {
  if (e.key === "Enter") {
    clickFunc(e);
    console.log("enter pressed");
    e.preventDefault();
  }
};

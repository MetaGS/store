import { useState } from "react";

const useFormInput = (initialState) => {
  let [value, setValue] = useState(initialState);

  let onChange = (e) => {
    setValue(e.target.value);
    // console.log("changing value");
  };

  return {
    value,
    onChange,
  };
};

export default useFormInput;

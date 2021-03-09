import { useState } from "react";

export const handleMinMaxDate = (max = 0) => {
  //if you did not pass max argument, then used as min, and min is Today. If you pass max
  // then max date you can choose starting from now. Counted in Months
  const today = new Date();
  const month = today.getMonth() + 1 + max;
  const day = today.getDate();

  const addZero = (date) => {
    return date < 10 ? "0" + date : date;
  };
  const minDate = `${today.getFullYear()}-${addZero(month)}-${addZero(day)}`;
  return minDate;
};

export const isNotANumber = (value) => {
  let cvvOrCardNumber = value.includes("/")
    ? value.split("/")
    : value.split(" ");
  if (value[value.length - 1] === "/" && value.length !== 3) return true; //we are not allowing enter [/], allow to enter [/] only if it is the 3d character: meaning [32/]

  if (value.includes(".")) return true; // the [.] is truthy number value, but we should now allow

  //check if value entered in input field is number, joining because
  if (Number.isNaN(Number(cvvOrCardNumber.join("")))) return true;
  return false;
};

export const useHandlers = () => {
  const [creditCard, setCreditCard] = useState({
    number: "",
    expire: "",
    cvv: "",
  });

  const handleCvv = ({ target }) => {
    if (isNotANumber(target.value)) return;

    setCreditCard({ ...creditCard, cvv: target.value });
  };

  const handleExpiration = ({ target }) => {
    let { value } = target;
    const newValLength = value.length;
    const oldValLength = creditCard.expire.length;
    const removingCharacter = oldValLength > newValLength; // if addingNewCharacter is false
    //it means that we are removing
    if (removingCharacter) {
      //if removing characters, just let it
      setCreditCard({ ...creditCard, expire: value });
      return;
    }
    if (isNotANumber(value)) return; //if it is not a number or 3d [/] splash char, then do not allow to enter
    if (newValLength === 2) value = value + "/"; // if it is not deleting, and entered 2nd char, then automatically put [/]
    if (newValLength === 3 && value[2] !== "/") {
      // if deleted previously, and entered number again, then put [/] between 2nd and 3rd char
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    setCreditCard({ ...creditCard, expire: value });
  };

  const handleCreditCardNumber = ({ target }) => {
    let { value, name } = target;
    const valLength = value.length;
    if (isNotANumber(value)) return;
    // debugger;
    if (valLength < creditCard.number.length) {
      setCreditCard({ ...creditCard, [name]: value });
      return;
    }

    let clearValue = value.split(" ").join("");
    let valueWithWhiteSpace = "";

    for (
      ;
      (clearValue.length % 4 === 0 && clearValue.length > 1) ||
      clearValue.length >= 4; //  using here clearValue.length instead of valLength, because length changes

    ) {
      valueWithWhiteSpace += clearValue.slice(0, 4) + " ";
      clearValue = clearValue.slice(4);
    }
    valueWithWhiteSpace += clearValue;

    setCreditCard({ ...creditCard, [name]: valueWithWhiteSpace });
  };

  return [
    creditCard,
    {
      handleExpiration,
      handleCvv,
      handleCreditCardNumber,
    },
  ];
};

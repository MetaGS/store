import { useState, useEffect } from "react";
import {
  addToField,
  removeFromField,
  getProductsAsArray,
} from "../firebase/db";
import { addTo, removeFrom, setField } from "../storage/actions";
import useStorage from "../storage";
import LocalStorage from "../localStorage";

const useControlField = (field) => {
  const [state, dispatch] = useStorage();
  const [control, setControl] = useState({ productsByField: [] });
  const [productsByField, setProductsByField] = useState([]);

  useEffect(() => {
    setControl(
      new ControlField(
        field,
        state.user?.uid,
        dispatch,
        state,
        new LocalStorage(field),
        productsByField
      )
    );
  }, []);

  useEffect(() => {
    console.log("runned in useControlField");
    console.log(`new state `);

    control?.setOwnState?.(state);

    control.getProductsByField?.().then((products) => {
      console.log("New products ");
      console.log(products);
      setProductsByField(products);
    });
    control.userSignedIn = state.userSignedIn;
    //need to update again by setProductsByField()
  }, [state[field], control, state.userSignedIn]);

  control.productsByField = productsByField;

  return control;
};

class ControlField {
  constructor(
    fieldName,
    userId,
    dispatch,
    state,
    localStorage,
    productsByField
  ) {
    this.userId = userId;
    this.field = fieldName;
    this.dispatch = dispatch;
    this.state = state;
    this.userSignedIn = !!userId;
    this.localStorage = localStorage;
    this.productsByField = productsByField;
    console.log("New control field as well");
    console.log(state);
  }

  addToField = async (fieldItemId) => {
    if (this.includes(fieldItemId)) {
      console.log("Already includes");
      return false;
    }
    //here should be logic in addToField so it check is user Signed in? if so then source is remote db, if user is not
    // signed in then, source is in window.localStorage;

    this.userSignedIn // better to use Proxy, in the future will change it
      ? await addToField(fieldItemId, this.userId, this.field)
      : this.localStorage.addToField(fieldItemId);
    this.dispatch(addTo[this.field]([fieldItemId]));
  };

  removeFromField = async (fieldItemId) => {
    this.userSignedIn
      ? await removeFromField(fieldItemId, this.userId, this.field)
      : this.localStorage.removeFromField(fieldItemId);
    this.dispatch(removeFrom[this.field](fieldItemId));
  };

  getProductsByField = () => {
    console.log(this.state);
    return getProductsAsArray(this.field, this.state).then((productArray) => {
      this.productsByField = [...productArray];
      return productArray;
    });
  };

  set = (arrayField) => {
    this.dispatch(setField[this.field](arrayField));
  };

  setOwnState = (state) => {
    this.state = state;
  };

  includes = (fieldItemId) => {
    console.log(this.field);
    return this.state[this.field].includes(fieldItemId);
  };

  showMeOwnState = () => {
    console.log(this.state);
  };
}

export default useControlField;

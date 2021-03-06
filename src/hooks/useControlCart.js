import { useState, useEffect } from "react";
import {
  updateUserField as updateUserFieldDB,
  removeFromField,
  addCartOrderObject,
  removeCartOrderById,
  getProductsAsArray,
  updateCartOrderObject,
} from "../firebase/db";
import { addTo, removeFrom, setField } from "../storage/actions";
import useStorage from "../storage";
import { LocalCart } from "../localStorage";

const defaultControl = {
  productsByField: [],
  addToField() {},
  removeFromField() {},
  getProductsByField() {
    return Promise.resolve([]);
  },
  updateItemInField() {},
  includes() {},
};

const useControlField = (field) => {
  const [state, dispatch] = useStorage();
  //initially setting control to object, because if i do not do so, and caller will call productsByField
  const [control, setControl] = useState(defaultControl);

  useEffect(() => {
    setControl(
      new ControlField(
        field,
        state.user?.uid,
        dispatch,
        state,
        new LocalCart(field),
        [] //productsByField
      )
    );
  }, []);

  useEffect(() => {
    control?.setOwnState?.(state);

    // control.getProductsByField?.()?.then((products) => {});
    control.userSignedIn = state.userSignedIn;
    //need to update again by setProductsByField()
  }, [state[field], control, state.userSignedIn]);

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
  }

  addToField = async (fieldItemObject) => {
    if (this.includes(fieldItemObject)) {
      return false;
    }
    // debugger;
    const status = this.userSignedIn // better to use Proxy, in the future will change it
      ? await addCartOrderObject(this.userId, this.field, fieldItemObject) // need to do again
      : this.localStorage.addToField(fieldItemObject);
    this.dispatch(addTo[this.field](fieldItemObject));
  };

  updateItemInField = async (fieldItemObject) => {
    const status = this.userSignedIn
      ? await updateCartOrderObject(this.userId, this.field, fieldItemObject)
      : this.localStorage.updateItemInField(fieldItemObject);
    status
      ? console.log(
          "%cUpdated Success",
          "color:green; font-size:1.2rem;padding-bottom:5px;border-bottom: 1px solid green;"
        )
      : console.log("%cUpdated error", "color:red; font-size:1.2rem;");
    return status;
  };

  removeFromField = async (fieldItemId) => {
    const result = this.userSignedIn
      ? await removeCartOrderById(this.userId, this.field, fieldItemId)
      : this.localStorage.removeFromField(fieldItemId);

    if (result) {
      console.log(
        "%cDeleted",
        "color:green; font-size:1.2rem;padding-bottom:5px;border-bottom: 1px solid green;"
      );
    } else {
      console.log("%cNot Deleted", "color:red; font-size:1.2rem;");
    }

    this.dispatch(removeFrom[this.field](fieldItemId));
  };

  getProductsByField = () => {
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

  includes = (fieldItemObject) => {
    const cartOrders = this.state[this.field];
    const doesInclude = cartOrders.find((cartOrder) => {
      return cartOrder.cartOrderId === fieldItemObject.cartOrderId;
    });
    return !!doesInclude;
  };

  showMeOwnState = () => {};
}

export default useControlField;

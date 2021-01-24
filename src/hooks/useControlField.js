import { useState, useEffect } from "react";
import { addToField, removeFromField } from "../firebase/db";
import { addTo, removeFrom, setField } from "../storage/actions";
import useStorage from "../storage";

export default (field) => {
  const [state, dispatch] = useStorage();
  const [control, setControl] = useState(
    new ControlField(field, state.user?.uid, dispatch, state[field])
  );

  useEffect(() => {
    return () => {
      setControl(null);
    };
  }, []);

  return control;
};

class ControlField {
  constructor(fieldName, userId, dispatch, fieldState) {
    this.userId = userId;
    this.field = fieldName;
    this.dispatch = dispatch;
    this.fieldState = fieldState;
  }

  addToField = async (fieldItemId) => {
    if (!this.signInFirst()) return false;
    await addToField(fieldItemId, this.userId, this.field);
    this.dispatch(addTo[this.field](fieldItemId));
  };

  removeFromField = async (fieldItemId) => {
    if (!this.signInFirst()) return false;
    await removeFromField(fieldItemId, this.userId, this.field);
    this.dispatch(removeFrom[this.field](fieldItemId));
  };

  set = (arrayField) => {
    this.dispatch(setField[this.field](arrayField));
  };

  hasInField = (fieldItemId) => {
    return this.fieldState.includes(fieldItemId);
  };

  signInFirst = () => {
    if (this.userId) return false;
    return true;
  };

  showMeOwnState = () => {
    console.log(this.fieldState);
  };
}

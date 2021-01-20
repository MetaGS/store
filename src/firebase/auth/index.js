import firebase from "firebase/app";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import useStorage from "../../storage";
import { signIn, signOut } from "../../storage/actions";

export { default as signUp } from "./signUp";
export { default as signOut } from "./signOut";
export { default as signIn } from "./signIn";

export default () => {
  const history = useHistory();
  const [state, dispatch] = useStorage();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(signIn(user));
        console.log("%csigned in", "color:green; font-weight: 600");
        console.log(history);

        console.log(user);
        console.log(state);
        console.log("%c-------------block", "color:green; font-weight: 600");
      } else {
        dispatch(signOut());
      }
    });
    return () => {};
  }, []);
};

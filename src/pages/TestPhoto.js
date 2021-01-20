import firebase from "firebase/app";
import { useState, useEffect } from "react";
import React from "react";

export default () => {
  const storageRef = firebase.storage().ref();

  const [url, setUrl] = useState("");

  useEffect(() => {
    storageRef
      .child("public/productImages/testStorage.jpg")
      .getDownloadURL()
      .then((url) => {
        setUrl(url);
      });
  });

  return (
    <div>
      <img src={url} alt="" />
    </div>
  );
};

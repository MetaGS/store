import firebase from "firebase/app";
import { useState, useEffect, useRef } from "react";
import React from "react";

import { uploadPhoto } from "../firebase/storage";
import "./HandlePhotoInput.css";

export default ({ giveParentFiles, urls = [] }) => {
  const ref = useRef();

  const [showPhotos, setShowPhotos] = useState([]);

  const onPhotosChange = (e) => {
    const files = ref.current.files;
    setShowPhotos([...files]);
    giveParentFiles([...Array.from(files)]);
  };

  return (
    <div>
      <input
        type="file"
        ref={ref}
        accept=".jpeg, .jpg, .png"
        multiple
        onChange={onPhotosChange}
      />
      {/* <button type="button" className="btn secondary sm" onClick={onUpload}>
        Upload Photo
      </button> */}
      <div className="image-list">
        {showPhotos.map((photo) => {
          return (
            <img
              src={URL.createObjectURL(photo)}
              onLoad={() => {
                console.log("urlObject revoke");
                URL.revokeObjectURL(photo);
              }}
              className="photo-create-thumb"
              alt=""
              key={photo.name}
            />
          );
        })}
      </div>
      <div className="uploaded-through-url">
        {urls.map((url) => {
          return <img src={url} />;
        })}
      </div>
    </div>
  );
}; /* next when i will have have time, need to update create product functions so, i send json to db [title,des,price]
      concurrently with product photos, but i attach temp id to both, create on create evnt in firease funcs when file will be created, 
      so i can move photos to dir named by PID, get photos downloadUrl and attach it to product in db as property
*/

const Download = () => {
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

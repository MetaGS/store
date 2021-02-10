import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import firebase from "firebase/app";

import InlineError from "../components/InlineError";
import HandlePhotoInput from "./HandlePhotoInput";

import { addProduct } from "../firebase/db";
import useFormInput from "../hooks/useFormInput";
import useInputList, { onEnterPress } from "../hooks/useInputList";
import { checkProductReliable } from "../utils/validateInputs";
import { uploadPhoto } from "../firebase/storage";

import "./CreateProduct.css";

const CreateProduct = (props) => {
  const db = firebase.firestore();

  const title = useFormInput("");
  const desc = useFormInput("");
  const price = useFormInput("");
  const [discount, setDiscount] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState();
  const [tagsFromDb, setTagsFromDb] = useState([]);
  const [colorsFromDb, setColorsFromDb] = useState([]);

  const [errors, setErrors] = useState({});
  //it is similar to useState return, BUT return differently check source code

  const [size, onSizeAdd, sizeList, backToSize] = useInputList("");
  const [color, onColorAdd, colorList, backToColor] = useInputList("");
  const [tag, onTagAdd, tagList, backToTag] = useInputList("");

  // fetch tags and color so there is no thousands of colors;
  useEffect(() => {
    db.collection("products")
      .get()
      .then((snapshot) => {
        const colorsDb = snapshot.docs.reduce((accum, doc) => {
          return [...accum, ...doc.data().colors];
        }, []);

        const tagsDb = snapshot.docs.reduce((accum, doc) => {
          return [...accum, ...doc.data().tags];
        }, []);

        console.log("tags and colors from db");
        console.log(tagsDb, colorsDb);
        setColorsFromDb(colorsDb);
        setTagsFromDb(tagsDb);
      });

    return () => {};
  }, []);

  //   ---------------------Upload Photo-----------------------------------------
  const [photoFiles, setPhotoFiles] = useState([]);
  const [urls, setUrls] = useState([]);

  const uploadMultiplePhotos = (id, files) => {
    const urlList = Promise.all(
      Array.from(files).map((file) => {
        return uploadPhoto(`productImages/${id}`, file);
      })
    ).then((urlArray) => {
      return urlArray;
    });

    return urlList;
    // setUrls(downloadUrl);
  };
  // ----------------------------------------------------------------------------

  // ----------------------On Submit Whole Product------------------------------
  const onSubmit = (e) => {
    e.preventDefault();

    console.log("made submit");
    const inputErrors = checkProductReliable(
      title.value,
      desc.value,
      price.value
    );
    if (Object.keys(inputErrors).length === 0) {
      addProduct(
        title.value,
        desc.value,
        price.value,
        sizeList,
        colorList,
        tagList,
        discount,
        discountPercentage
      )
        .then((snap) => {
          // console.log(snap.id);
          //   console.log(snap.data());
          snap.get().then((doc) => {
            console.log(doc);
            // doc.update({ updatedMe: true });
            console.log(doc.exists);
            console.log(doc.data());
          });

          const productId = snap.id;

          uploadMultiplePhotos(productId, photoFiles)
            .then((listOfPhotoUrls) => {
              snap.update({ photoUrls: [...listOfPhotoUrls] });

              setUrls(listOfPhotoUrls);
            })
            .catch((error) => {
              console.log(
                "%cError in CreateProduct onSubmit",
                "font-size: 1.2rem; color: red"
              );
              console.log(error.message);
            });
        })
        .catch((error) => {
          console.log(
            "%cError CreateProduct 79",
            "font-size: 1.2rem; color: red;"
          );
          console.log(error.message);
        });
      setErrors({});
    } else {
      setErrors(inputErrors);
    }
  };

  // ----------------------------------------------------------------------------

  return (
    <form action="#" onSubmit={onSubmit}>
      <div className="create-product">
        <input
          className="prod-title"
          type="text"
          name="title"
          id="title"
          placeholder={"Input title for product"}
          {...title}
        ></input>
        <InlineError error={errors.title} />

        <textarea
          name="description"
          id="prod-desc"
          cols="30"
          rows="10"
          {...desc}
          placeholder="Enter product desc"
        ></textarea>
        <InlineError error={errors.desc} />

        <input
          type="number"
          placeholder="Enter price"
          className="prod-field sm"
          {...price}
        />
        <InlineError error={errors.price} />

        <div className="is-there-discount">
          <input
            type="checkbox"
            onChange={(e) => {
              setDiscount(!discount);
            }}
          />
          <input
            type="number"
            disabled={!discount}
            placeholder="Enter discount percentage"
            className="prod-field sm"
            value={discountPercentage}
            onChange={(e) => {
              setDiscountPercentage(e.target.value);
            }}
            onKeyDown={onEnterPress(() => {})}
          />
        </div>

        <div className="prod prod-sizes">
          <input
            type="text"
            placeholder="Enter sizes"
            className="prod-field sm"
            {...size}
          />
          <button type="button" className="btn secondary" {...onSizeAdd}>
            add size
          </button>
          <ul className="size-list">
            {sizeList.map((size, index) => {
              return (
                <li key={`${size}${index}`} onClick={backToSize(index)}>
                  {size}
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="size-list itemsFromDb">
          {tagsFromDb.map((tagFromDb, index) => {
            return (
              <li key={`${tag}${index}`} onClick={tag.onChoose(tagFromDb)}>
                {tagFromDb}
              </li>
            );
          })}
        </ul>
        <div className="prod prod-sizes">
          <input
            type="text"
            placeholder="Enter tags"
            className="prod-field sm"
            {...tag}
          />
          <button type="button" className="btn secondary" {...onTagAdd}>
            add tag
          </button>
          <ul className="size-list">
            {tagList.map((tagFromList, index) => {
              return (
                <li key={`${tagFromList}${index}`} onClick={backToTag(index)}>
                  {tagFromList}
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="prod-color-list itemsFromDb">
          {colorsFromDb.map((colorFromDb, index) => {
            return (
              <li
                key={index}
                style={{ backgroundColor: colorFromDb }}
                className="chooseFromDb"
                onClick={color.onChoose(colorFromDb)}
              >
                color
              </li>
            );
          })}
        </ul>
        <div className="prod prod-colors">
          <input
            type="color"
            placeholder="Enter colors"
            className="prod-field sm"
            {...color}
          />
          <button type="button" className="btn secondary" {...onColorAdd}>
            Add Color
          </button>
          <ul className="prod-color-list">
            {colorList.map((color, index) => {
              return (
                <li
                  key={`${color + index}`}
                  onClick={backToColor(index)}
                  style={{ backgroundColor: color }}
                >
                  color
                </li>
              );
            })}
          </ul>
        </div>

        <div className="prod prod-images">
          <HandlePhotoInput giveParentFiles={setPhotoFiles} urls={urls} />
        </div>

        <button type="submit" className="btn primary-button mid prod-submit">
          {" "}
          submit
        </button>
      </div>
    </form>
  );
};

CreateProduct.propTypes = {};

export default CreateProduct;

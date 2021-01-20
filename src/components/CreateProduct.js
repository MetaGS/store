import React, { useState } from "react";
import PropTypes from "prop-types";

import InlineError from "../components/InlineError";

import { addProduct } from "../firebase/db";
import useFormInput from "../hooks/useFormInput";
import useInputList from "../hooks/useInputList";
import { checkProductReliable } from "../utils/validateInputs";
import "./CreateProduct.css";

const CreateProduct = (props) => {
  const title = useFormInput("");
  const desc = useFormInput("");
  const price = useFormInput("");
  //   const [photoUrl, setPhotoUrl] = useState("");
  //   const [listOfUrls, setList] = useState([]);
  const [errors, setErrors] = useState({});
  //   const [size, setSize] = useState("");
  //   const [sizes, setSizes] = useState([]);
  //   const [color, setColor] = useState("");
  //   const [colors, setColors] = useState([]);

  //it is similar to useState return, BUT return differently check source code
  const [photoUrl, onAdd, listOfPhotoUrls, backToPhotoUrl] = useInputList(
    "./public/"
  );
  const [size, onSizeAdd, sizeList, backToSize] = useInputList("");

  const [color, onColorAdd, colorList, backToColor] = useInputList("");

  //   const onSizeAdd = (e) => {
  //     if (size.trim() !== "") {
  //       const list = [...sizes, size];
  //       setSizes(list);
  //       setSize("");
  //     }
  //   };
  const onSubmit = (e) => {
    e.preventDefault();

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
        listOfPhotoUrls,
        sizeList,
        colorList
      )
        .then((doc) => {})
        .catch((error) => {});
      setErrors({});
    } else {
      setErrors(inputErrors);
    }
  };

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

        <ul className="list-of-photos">
          {listOfPhotoUrls.map((item, index) => {
            return (
              <li key={`${item}${index}`} onClick={backToPhotoUrl(index)}>
                {item}
              </li>
            );
          })}
        </ul>
        <div className="prod prod-images">
          <input
            type="text"
            placeholder="enter img url:: <photos will be located in public directory, till i set up firebase storage"
            {...photoUrl}
          />
          <button type="button" className="btn secondary" {...onAdd}>
            add url
          </button>
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

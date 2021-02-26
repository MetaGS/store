import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import firebase from "firebase/app";

import InlineError from "../InlineError";
import HandlePhotoInput from "../HandlePhotoInput";
import CreateProductField from "./CreateProductField";

import { addProduct } from "../../firebase/db";
import useFormInput from "../../hooks/useFormInput";
import useInputList, { onEnterPress } from "../../hooks/useInputList";
import { checkProductReliable } from "../../utils/validateInputs";
import { uploadPhoto, uploadMultiplePhotos } from "../../firebase/storage";

import "./CreateProduct.css";

const CreateProduct = (props) => {
  const title = useFormInput("");
  const desc = useFormInput("");
  const price = useFormInput("");
  const [discount, setDiscount] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState();

  const [colorList, setColorList] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [errors, setErrors] = useState({});

  //   ---------------------Upload Photo-----------------------------------------
  const [photoFiles, setPhotoFiles] = useState([]);
  const [urls, setUrls] = useState([]);

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
      console.log(tagList);
      addProduct({
        title: title.value,
        desc: desc.value,
        price: price.value,
        sizes: sizeList,
        colors: colorList,
        tags: tagList,
        discount,
        discountPercentage,
        categories: categoryList,
      })
        .then((refToProduct) => {
          console.log("this is ref after product add then");
          console.log(refToProduct);
          //   console.log(refToProduct.data());
          refToProduct.get().then((doc) => {
            console.log(doc);
            // doc.update({ updatedMe: true });
            console.log(doc.exists);
            console.log(doc.data());
          });

          const productId = refToProduct.id;

          uploadMultiplePhotos(productId, photoFiles)
            .then((listOfPhotoUrls) => {
              refToProduct.update({ photoUrls: [...listOfPhotoUrls] });

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
            value={discount}
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

        <CreateProductField
          data={{
            updateParent: setTagList,
            value: "tag",
            fromServerField: "tags",
            classNames: { info: "size-list", block: "prod-sizes" },
          }}
        >
          {({ onClick, value }) => {
            return <li onClick={onClick}>{value}</li>;
          }}
        </CreateProductField>

        <CreateProductField
          data={{
            updateParent: setSizeList,
            value: "size",
            classNames: { info: "size-list", block: "prod-sizes" },
          }}
        >
          {({ onClick, value }) => {
            return <li onClick={onClick}>{value}</li>;
          }}
        </CreateProductField>

        <CreateProductField
          data={{
            updateParent: setCategoryList,
            value: "category",
            classNames: { info: "size-list", block: "prod-sizes" },
            fromServerField: "categories",
          }}
        >
          {({ onClick, value }) => {
            return <li onClick={onClick}>{value}</li>;
          }}
        </CreateProductField>

        <CreateProductField
          data={{
            updateParent: setColorList,
            value: "color",
            fromServerField: "colors",
            classNames: { info: "prod-color-list", block: "prod-colors" },
          }}
        >
          {({ onClick, value }) => {
            return (
              <li onClick={onClick} style={{ backgroundColor: value }}>
                {value}
              </li>
            );
          }}
        </CreateProductField>

        <div className="prod prod-images">
          <HandlePhotoInput giveParentFiles={setPhotoFiles} urls={urls} />
        </div>

        <button type="submit" className="btn primary-button mid prod-submit">
          submit
        </button>
      </div>
    </form>
  );
};

CreateProduct.propTypes = {};

export default CreateProduct;

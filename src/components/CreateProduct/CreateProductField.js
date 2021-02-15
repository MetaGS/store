import React, { useEffect, useState, Fragment } from "react";
import firebase from "firebase/app";
import PropTypes from "prop-types";

import useInputList from "../../hooks/useInputList";

const CreateProductField = ({
  data: { updateParent, fromServerField = null, value = "text", classNames },
  options,
  children,
}) => {
  const [tag, onTagAdd, tagList, backToTag] = useInputList("", updateParent);
  const [fieldFromServer, setFieldFromServer] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

    fromServerField &&
      db
        .collection("products")
        .get()
        .then((snapshot) => {
          const serverField = snapshot.docs.reduce((accum, doc) => {
            const field = doc.data()[fromServerField];
            return !!field ? [...accum, ...field] : accum;
          }, []);

          console.log("from Server");
          console.log(serverField);
          setFieldFromServer(serverField);
        });

    return () => {};
  }, [fromServerField]);

  return (
    <>
      {fromServerField && (
        <ul className={`${classNames.info} itemsFromDb`}>
          {fieldFromServer.map((valueFromDb, index) => {
            return (
              <Fragment key={`${valueFromDb + index}`}>
                {children({
                  onClick: tag.onChoose(valueFromDb),
                  value: valueFromDb,
                })}
              </Fragment>
            );
          })}
        </ul>
      )}

      <div className={`prod ${classNames.block}`}>
        <input
          type={value}
          placeholder={`Enter ${value}s`}
          className="prod-field sm"
          {...tag}
        />

        <button type="button" className="btn secondary" {...onTagAdd}>
          add {value}
        </button>
        <ul className={classNames.info}>
          {tagList.map((valueFromList, index) => {
            return (
              <Fragment key={valueFromList + index}>
                {children({ onClick: backToTag(index), value: valueFromList })}
              </Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
};

CreateProductField.propTypes = {};

export default CreateProductField;

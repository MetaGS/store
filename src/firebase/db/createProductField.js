import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import useInputList from "../useInputList";

const createProductField = ({ updateParent, fromServerField = null }) => {
  const [tag, onTagAdd, tagList, backToTag] = useInputList("");
  const [fromServer, setFromServer] = useState([]);

  useEffect(() => {
    fromServerField &&
      db
        .collection("products")
        .get()
        .then((snapshot) => {
          const serverField = snapshot.docs.reduce((accum, doc) => {
            return [...accum, ...doc.data()[fromServerField]];
          }, []);

          console.log("from Server");
          console.log(tagsDb);
          setFromServer(serverField);
        });

    return () => {};
  }, [fromServerField]);

  return (
    <>
      {fromServerField && (
        <ul className="size-list itemsFromDb">
          {tagsFromDb.map((tagFromDb, index) => {
            return (
              <li key={`${tag}${index}`} onClick={tag.onChoose(tagFromDb)}>
                {tagFromDb}
              </li>
            );
          })}
        </ul>
      )}
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
    </>
  );
};

createProductField.propTypes = {};

export default createProductField;

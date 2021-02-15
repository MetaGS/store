import firebase from "firebase/app";
import { useEffect, useState } from "react";

const useSearchInDb = (searchTerm, location = "products/tags") => {
  const db = firebase.firestore();
  const [result, setResult] = useState(null);
  const [timeout, setNewTimeout] = useState(null); // do not путать/confuse with setTimeout
  const [downloading, setDownloading] = useState(false);

  const locationClean =
    location[0] === "/" ? location.slice(1).split("/") : location.split("/");
  const [collection = "products", field = "tags", ...rest] = locationClean;

  console.log("useSearchInDb.js runs");

  useEffect(() => {
    timeout && clearTimeout(timeout);
    console.log("search run");
    const newTimeout = setTimeout(() => {
      if (searchTerm != null) {
        setDownloading(true);
        db.collection(collection)
          .where(field, "array-contains", searchTerm)
          .limit(10)
          .get()
          .then(({ docs }) => {
            const foundInDb = docs.map((doc) => {
              return { ...doc.data(), is: field, id: doc.id };
            });
            setDownloading(false);
            setResult(foundInDb);
          })
          .catch((error) => {
            console.log("%c Error unde useSearchInDb", "color: red;");
            console.log(error.message);
            throw error;
          });
      }
    }, 1000);
    setNewTimeout(newTimeout);
  }, [searchTerm]);

  return [result, downloading] || [null, downloading];
};

export default useSearchInDb;

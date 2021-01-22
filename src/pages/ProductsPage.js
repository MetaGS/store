import { Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useStorage from "../storage";
import { WIDE_SEARCH, NORMAL_SEARCH } from "../storage/types";

import Filters from "../components/FIlters";
import Products from "../components/Products";

import { getProducts } from "../firebase/db";
import "./ProductsPage.css";

const ProductsPage = (props) => {
  const [state, dispatch] = useStorage();

  useEffect(() => {
    dispatch({ type: WIDE_SEARCH });

    return () => {
      dispatch({ type: NORMAL_SEARCH });
    };
  }, []);

  useEffect(() => {}, []);

  console.log(state);
  return (
    <main className="main--products">
      <section className="sort">
        <p>Sort By:</p>
        <ul className="sort-items">
          <li className="sort-item">
            <a href="#">Category</a>
          </li>
          <li className="sort-item">
            <a href="#">Discount</a>
          </li>
          <li className="sort-item">
            <a href="#">Price</a>
          </li>
          <li className="sort-item">
            <a href="#">Rating</a>
          </li>
        </ul>
      </section>
      {/* <Switch>
        <Route
          path="/checkRouter"
          component={() => {
            return (
              <h1 style={{ fontSize: "3rem" }}>Hello World Route Check</h1>
            );
          }}
        />
      </Switch> */}

      <section className="content">
        <Filters />

        <Products />
      </section>
    </main>
  );
};

export default ProductsPage;

import { Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useStorage from "../storage";

import { addProducts } from "../storage/actions";
import { getProductsWithFilters } from "../firebase/db";

import { BsFilterLeft } from "react-icons/bs";
import Filters from "../components/FIlters";
import Products from "../components/Products";
import SortBy from "../components/SortBy";

import "./ProductsPage.css";

const ProductsPage = ({ className = "", onScroll = () => {}, ...props }) => {
  const [state, dispatch] = useStorage();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState([]);
  const [filters, setFilters] = useState({});
  const [filterMobileActive, setFilterMobileActive] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log(
      "%c runs productPage useEffect",
      "color: green; font-size: 1.2rem;"
    );
    const whereFilters = Object.values(filters).flat(1);

    getProductsWithFilters(whereFilters, sortBy)
      // .where("price", ">=", 200)

      .get()
      .then((productsSnapshot) => {
        console.log(productsSnapshot);
        return Promise.all(
          /* actually promise.all here is not needed, because doc.data() is sync */
          productsSnapshot.docs.map((doc) => {
            const docWithId = doc.data();
            docWithId.id = doc.id;
            return docWithId;
          })
        ).then((productList) => {
          //   throw Error("Bla bla bla error");
          setLoading(false);
          dispatch(addProducts(productList));
          setProducts(productList);
        });
      })
      .catch((error) => {
        console.log(
          "%cError under ProductsPage",
          "color: red; font-size: 1.2rem;"
        );
        console.log(error.message);
      });
  }, [sortBy, filters]);

  console.log("runs producSpage");

  const updateFilters = (field, filterArray) => {
    setFilters({
      ...filters,
      [field]: Array.isArray(filterArray) ? filterArray : [filterArray],
    });
  };

  return (
    <main className={`main--products ${className}`}>
      <div className="sort-filter-row">
        <SortBy setParentSortBy={setSortBy} />
        <div
          className={`mobile-filter-toggler ${
            filterMobileActive ? "active" : ""
          }`}
        >
          <button
            onClick={() => {
              setFilterMobileActive(!filterMobileActive);
            }}
          >
            <span className="filter-text">Filters</span>
            <BsFilterLeft />
          </button>
        </div>
      </div>

      <section className="content">
        <div className={`filters ${filterMobileActive ? "mobile-active" : ""}`}>
          <Filters updateParent={updateFilters} />
        </div>
        {!loading && <Products {...{ products }} />}
        {loading && <h2>Loading...</h2>}
      </section>
    </main>
  );
};

export default ProductsPage;

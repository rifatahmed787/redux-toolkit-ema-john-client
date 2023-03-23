import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBrands } from "../../../features/filter/filterSlice";

import "../Shop/Shop.css";
import ProductCart from "./product/ProductCart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filter);
  const { brands } = filters;

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //active class
  const activeClass = "text-white  bg-indigo-500 border-white";

  let content;
  if (products.length) {
    content = products.map((product) => (
      <ProductCart key={product._id} product={product} />
    ));
  }

  if (products.length && brands.length) {
    content = products
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .map((product) => <ProductCart key={product._id} product={product} />);
  }

  //handle scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="mt-7 flex justify-center gap-5">
        <button
          onClick={() => dispatch(toggleBrands("phone"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("phone") ? activeClass : null
          }`}
        >
          Phone
        </button>
        <button
          onClick={() => dispatch(toggleBrands("headphone"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("headphone") ? activeClass : null
          }`}
        >
          Headphone
        </button>
        <button
          onClick={() => dispatch(toggleBrands("backpack"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("backpack") ? activeClass : null
          }`}
        >
          Backpack
        </button>
        <button
          onClick={() => dispatch(toggleBrands("shoe"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("shoe") ? activeClass : null
          }`}
        >
          Shoe
        </button>
        <button
          onClick={() => dispatch(toggleBrands("bottle"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("bottle") ? activeClass : null
          }`}
        >
          Bottle
        </button>
        <button
          onClick={() => dispatch(toggleBrands("cap"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("cap") ? activeClass : null
          }`}
        >
          Cap
        </button>
      </div>
      <div className="grid justify-items-center grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8 py-8 px-5 mb-10">
        {content}
      </div>
    </div>
  );
};

export default Shop;

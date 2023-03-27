import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ReviewItem from "../ReviewItem/ReviewItem";

import CartEstimate from "./CartEstimate";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cart);

  //handle scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //   if (isLoading) {
  //     return <Spinner />;
  //   }

  return (
    <div className="lg:grid grid-cols-4 gap-4">
      <div className="col-span-3 py-7">
        {cartData && cartData.length ? (
          cartData.map((cart) => <ReviewItem cart={cart} key={cart._id} />)
        ) : (
          <h2 className="flex justify-center items-center min-h-screen text-3xl font-bold">
            No Items for Review. Please,{" "}
            <Link className="link ml-1" to="/shop">
              shop more
            </Link>
          </h2>
        )}
      </div>
      <div className="cart-container flex justify-center py-5">
        <CartEstimate cart={cartData} />
      </div>
    </div>
  );
};

export default Cart;

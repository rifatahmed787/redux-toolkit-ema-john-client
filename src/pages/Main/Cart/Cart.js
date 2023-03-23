import React, { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/UserContext";
import ReviewItem from "../ReviewItem/ReviewItem";

import CartEstimate from "./CartEstimate";

const Cart = () => {
  const { user } = useContext(AuthContext);

  const cartData = useSelector((state) => state.cart.cart);

  //   const {
  //     data: cartData = [],
  //     isLoading,
  //     refetch,
  //   } = useQuery({
  //     queryKey: ["cartData"],
  //     queryFn: async () => {
  //       const res = await fetch(
  //         `https://react-ema-john-pagination-server.vercel.app/addtocart/${user?.email}`
  //       );
  //       const data = await res.json();
  //       return data;
  //     },
  //   });

  // delete all from cart
  const handleClearCart = () => {
    fetch(
      `https://react-ema-john-pagination-server.vercel.app/clearcart?email=${user?.email}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          //   refetch();
          toast.success("Cart cleared succcessfully");
        }
      });
  };

  //handledelete review items from cart
  const handleRemoveItem = (id) => {
    fetch(
      `https://react-ema-john-pagination-server.vercel.app/deleteitem/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Item deleted successfully");
          //   refetch();
        }
      });
  };

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
          cartData.map((cart) => (
            <ReviewItem
              cart={cart}
              key={cart._id}
              handleRemoveItem={handleRemoveItem}
            />
          ))
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
        <CartEstimate cart={cartData} handleClearCart={handleClearCart} />
      </div>
    </div>
  );
};

export default Cart;

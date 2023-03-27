import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../../features/cart/cartSlice";

import "../Cart/Cart.css";
const CartEstimate = (props) => {
  const { cart } = props;
  const dispatch = useDispatch();

  //estimate
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart space-y-3">
      <h4 className="text-3xl font-bold">Order Summary</h4>
      <p className="font-bold">Selected Items: {quantity}</p>
      <p className="font-bold">Total price: ${total}</p>
      <p className="font-bold">Total Shipping: ${shipping}</p>
      <p className="font-bold">Tax: ${tax}</p>
      <h5 className="font-bold">Grand Total: ${grandTotal.toFixed(2)}</h5>
      <div className="space-x-2">
        {cart?.length > 0 ? (
          <button
            className="font-bold border border-orange-500 hover:bg-orange-500 hover:text-white px-2"
            onClick={() => dispatch(clearCart(cart))}
          >
            Clear Cart
          </button>
        ) : (
          ""
        )}
        <Link to="/payment">
          {cart?.length > 0 ? (
            <button className="font-bold border border-orange-500 hover:bg-orange-500 hover:text-white px-2">
              Confirm order
            </button>
          ) : (
            ""
          )}
        </Link>
      </div>
    </div>
  );
};

export default CartEstimate;

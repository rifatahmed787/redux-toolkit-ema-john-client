import { Icon } from "@iconify/react";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../features/cart/cartSlice";
import "../ReviewItem/ReviewItem.css";

const ReviewItem = ({ cart, handleRemoveItem }) => {
  const { name, price, quantity, shipping, img, _id } = cart;
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center py-3">
      <div className="review-item lg:flex border border-[#95A0A7] rounded-md w-[571px] mx-5 p-2">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="review-details-container pl-3">
          <div className="review-details">
            <p>{name}</p>
            <p>
              <small>Price: ${price}</small>
            </p>
            <p>
              <small>Shipping: ${shipping}</small>
            </p>
            <p>
              <small>Quantity: {quantity}</small>
            </p>
          </div>

          <div className="delete-container">
            <button
              className="btn-delete"
              onClick={() => dispatch(removeFromCart(cart))}
            >
              <Icon
                icon="material-symbols:delete-outline"
                className="delete-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;

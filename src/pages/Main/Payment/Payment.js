import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useNavigation } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return;
  }
  return (
    <div className="min-h-screen">
      <h2 className="text-[#149777] text-center py-5 text-3xl font-semibold font-serif">
        Pay to confirm your order
      </h2>

      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

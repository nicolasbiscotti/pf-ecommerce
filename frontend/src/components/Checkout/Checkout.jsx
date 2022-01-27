import React from "react";
import PayPalCheckout from "./PayPalCheckout/PayPalCheckout";
import StripeCheckout from "./StripeCheckout/StripeCheckout";
import MpagoCheckout from "./MpagoCheckout/MpagoCheckout";

function Checkout() {
  return (
    <>
      <PayPalCheckout />
      <StripeCheckout />
      <MpagoCheckout />
    </>
  );
}

export default Checkout;

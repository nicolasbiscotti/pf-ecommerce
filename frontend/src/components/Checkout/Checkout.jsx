import React from "react";
import PayPalCheckout from "./PayPalCheckout/PayPalCheckout";
//import MPCheckout from "./MPCheckout/MPCheckout";
import { CheckoutStyled } from "./CheckoutStyled";

function Checkout() {
  return (
    <CheckoutStyled>
      <PayPalCheckout />
      {/* <MPCheckout /> */}
    </CheckoutStyled>
  );
}

export default Checkout;

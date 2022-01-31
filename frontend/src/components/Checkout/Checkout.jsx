import React from "react";
import PayPalCheckout from "./PayPalCheckout/PayPalCheckout";
import { CheckoutStyled, NavlinkHome } from "./CheckoutStyled";
import { IoIosArrowBack } from "react-icons/io";
import { Asidecards } from "./Aside/Asidecards";

function Checkout({ order }) {
  //order --> { ...items: [ {name: "", amount: "", quantity: ""}, ]}
  return (
    <CheckoutStyled>
      <div className="header-container">
        <NavlinkHome to="/">
          <IoIosArrowBack /> e-kommerce
        </NavlinkHome>
      </div>
      <div className="main-container">
        <div className="app-container">
          <PayPalCheckout order={order} />
        </div>
        <Asidecards />
      </div>
    </CheckoutStyled>
  );
}

export default Checkout;

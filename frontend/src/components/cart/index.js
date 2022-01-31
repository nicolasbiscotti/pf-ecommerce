import React from "react";
import { useSelector } from "react-redux";
import { CartStyled } from "./styles";
import Cards from "./cards";
import Detailtbar from "./detailbar";
import { NavLink } from "react-router-dom";

const Cart = function () {
  var cart = useSelector((state) => state.cart);

  return (
    <CartStyled>
      <h1>SHOPPING CART</h1>
      <div className="big-container">
        <Cards {...cart} />
        <Detailtbar cart={cart} />
      </div>
      <button style={{ width: "50vw" }}>
        <NavLink to="/checkout">asdddddd</NavLink>
      </button>
    </CartStyled>
  );
};

export default Cart;

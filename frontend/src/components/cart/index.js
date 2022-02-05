import React from "react";
import { useSelector } from "react-redux";
import { CartStyled } from "./styles";
import Cards from "./cards";
import Detailtbar from "./detailbar";
import Emptycart from "./emptycart";

const Cart = function () {
  var cart = useSelector((state) => state.cart);

  if (cart.products.length === 0) {
    return <Emptycart />;
  }
  return (
    <CartStyled>
      <h1>SHOPPING CART</h1>
      <div className="big-container">
        <Cards {...cart} />
        <Detailtbar cart={cart} />
      </div>
    </CartStyled>
  );
};

export default Cart;

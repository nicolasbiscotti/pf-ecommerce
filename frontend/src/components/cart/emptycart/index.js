import React from "react";
import EmptycartStyled, { NavlinkShop } from "./styles";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

function Emptycart() {
  return (
    <EmptycartStyled>
      <MdOutlineRemoveShoppingCart
        style={{
          color: "rgb(210, 215, 211)",
          fontSize: "15rem",
          marginBottom: "3rem",
        }}
      />
      <h1 style={{ marginBottom: "8rem" }}>Your cart is empty</h1>
      <NavlinkShop to="/shop">
        <p style={{ color: "rgba(0,0,0,.6)" }}>
          Dont know what to buy? Shop today's deals!
        </p>
      </NavlinkShop>
    </EmptycartStyled>
  );
}

export default Emptycart;

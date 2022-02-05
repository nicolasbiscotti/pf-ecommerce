import React from "react";
import { Button } from "../../common/button/Button";
import EmptycartStyled, { NavlinkShop } from "./styles";

function Emptycart() {
  return (
    <EmptycartStyled>
      <img src="https://i.imgur.com/dCdflKN.png" alt="" />
      <h1>Your Cart is Empty</h1>
      <NavlinkShop to="/shop" margin={"4rem 0 6rem 0"}>
        <Button
          textTransform={"lowercase"}
          fontSize={"2rem"}
          fontWeight={"500"}
          width={"18ch"}
          height={"4rem"}
          bgColor={"#3b78ff"}
          hoverBgColor={"#4a89ff"}
          radius={"3rem"}
        >
          continue shopping
        </Button>
      </NavlinkShop>
      <NavlinkShop to="/shop">
        <p>Don't know what to buy? shop today's deals!</p>
      </NavlinkShop>
    </EmptycartStyled>
  );
}

export default Emptycart;

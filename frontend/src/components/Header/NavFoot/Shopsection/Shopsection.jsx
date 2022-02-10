import React from "react";
import { ShopsectionStyled } from "./ShopsectionStyled";
import Shopbutton from "./Shopbutton/Shopbutton";

function NavFoot() {
  return (
    <ShopsectionStyled>
      <Shopbutton to="/shop" span="SHOP" />
      <Shopbutton to="/favorites" span="FAVORITES" />
      <Shopbutton to="/orders" span="ORDERS" />
    </ShopsectionStyled>
  );
}

export default NavFoot;

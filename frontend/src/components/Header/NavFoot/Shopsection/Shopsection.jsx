import React from "react";
import { ShopsectionStyled } from "./ShopsectionStyled";
import Shopbutton from "./Shopbutton/Shopbutton";

function NavFoot() {
  return (
    <ShopsectionStyled>
      <Shopbutton to="/shop" span="SHOP" />
      <Shopbutton to="/favorites" span="FAVORITES" />
      <Shopbutton to="/favorites" span="SECTION I" />
    </ShopsectionStyled>
  );
}

export default NavFoot;

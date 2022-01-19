import React from "react";
import { NavFootStyled } from "./NavFootStyled";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Shopsection from "./Shopsection/Shopsection";

function NavFoot() {
  return (
    <NavFootStyled>
      <BurgerMenu />
      <Shopsection />
      <span>'Spend $120 more and get free shipping!'</span>
    </NavFootStyled>
  );
}

export default NavFoot;

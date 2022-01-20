import React from "react";
import { NavFootStyled } from "./NavFootStyled";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Shopsection from "./Shopsection/Shopsection";

function NavFoot() {
  return (
    <NavFootStyled>
      <BurgerMenu />
      <Shopsection />
    </NavFootStyled>
  );
}

export default NavFoot;

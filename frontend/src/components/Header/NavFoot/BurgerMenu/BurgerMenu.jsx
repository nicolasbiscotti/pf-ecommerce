import React from "react";
import { BurgerMenuStyled } from "./BurgerMenuStyled";
import burgerIcon from "../../../../utilsStyles/utilsImages/burger-icon.png";

function BurgerMenu() {
  return (
    <BurgerMenuStyled>
      <img src={burgerIcon} alt="burger icon" />
      <span>MENU</span>
    </BurgerMenuStyled>
  );
}

export default BurgerMenu;

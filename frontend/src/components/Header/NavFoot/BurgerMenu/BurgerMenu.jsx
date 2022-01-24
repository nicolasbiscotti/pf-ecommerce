import React from "react";
import { BurgerMenuStyled } from "./BurgerMenuStyled";
import { GoLocation } from "react-icons/go";

function BurgerMenu() {
  return (
    <BurgerMenuStyled>
      <GoLocation
        style={{ width: "2.5rem", height: "2.5rem", marginBottom: "0.4rem" }}
      />
      <div>
        <p>Enviar a</p>
        <p>---</p>
      </div>
    </BurgerMenuStyled>
  );
}

export default BurgerMenu;

import React from "react";
import { NavFootStyled } from "./NavFootStyled";
import LocationMenu from "./LocationMenu/LocationMenu";
import Shopsection from "./Shopsection/Shopsection";

function NavFoot() {
  return (
    <NavFootStyled>
      <LocationMenu />
      <Shopsection />
    </NavFootStyled>
  );
}

export default NavFoot;

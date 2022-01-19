import React from "react";
import { HeaderStyled } from "./HeaderSyle";
import NavTop from "./NavTop/NavTop";
import NavMain from "./NavMain/NavMain";
import NavFoot from "./NavFoot/NavFoot";

function Header() {
  return (
    <HeaderStyled>
      <NavTop />
      <NavMain />
      <NavFoot />
    </HeaderStyled>
  );
}

export default Header;
//rsf

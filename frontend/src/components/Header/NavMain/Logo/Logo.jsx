import React from "react";
import { LogoStyled } from "./LogoStyled";

function Logo({ to, span }) {
  return <LogoStyled to={to}>{span}</LogoStyled>;
}

export default Logo;

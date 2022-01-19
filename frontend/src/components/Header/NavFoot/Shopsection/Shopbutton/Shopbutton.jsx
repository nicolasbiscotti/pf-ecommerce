import React from "react";
import { ShopbuttonStyled } from "./ShopbuttonStyled";

function Shopbutton({ to, span }) {
  return <ShopbuttonStyled to={to}>{span}</ShopbuttonStyled>;
}

export default Shopbutton;

import React from "react";
import { BoxStyled } from "./BoxStyled";
import userIcon from "../../../../../utilsStyles/utilsImages/loggin-icon.png";
import cartIcon from "../../../../../utilsStyles/utilsImages/cart-icon.png";
import { Link } from "react-router-dom";

function Box({ Imgsrc, Imgalt, Text }) {
  const userIc = userIcon;
  const cartIc = cartIcon;

  return (
    <BoxStyled>
      <img src={Imgsrc === "user" ? userIc : cartIc} alt={Imgalt} />
      <div>
        <Link to="/login">
          <p>{Text[0]}</p>
        </Link>
        <Link to="/login/register">
          <p>{Text[1].includes(".") ? <b>{Text[1]}</b> : Text[1]}</p>
        </Link>
      </div>
    </BoxStyled>
  );
}

export default Box;

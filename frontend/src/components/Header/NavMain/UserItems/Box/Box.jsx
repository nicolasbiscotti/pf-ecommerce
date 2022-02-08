import React from "react";
import { BoxStyled } from "./BoxStyled";
import userIcon from "../../../../../utilsStyles/utilsImages/loggin-icon.png";
import cartIcon from "../../../../../utilsStyles/utilsImages/cart-icon.png";
import { NavLink, useNavigate } from "react-router-dom";

function Box({ Imgsrc, Imgalt, Text, logout }) {
  const userIc = userIcon;
  const cartIc = cartIcon;

  const navigate = useNavigate();

  const loginOrHome = () => {
    const to = localStorage.getItem("jwt") ? "/" : "/login";
    navigate(to);
  };
  const logoutOrRegister = () => {
    if (localStorage.getItem("jwt")) {
      logout();
    } else {
      navigate("/login/register");
    }
  };

  const toCart = () => {
    navigate("/cart");
  };

  return (
    <BoxStyled>
      <NavLink to={Imgsrc === "user" ? "/login" : "/cart"}>
        <img src={Imgsrc === "user" ? userIc : cartIc} alt={Imgalt}></img>
      </NavLink>
      <div>
        <p onClick={Imgsrc === "user" ? loginOrHome : toCart}>{Text[0]}</p>

        <p onClick={Imgsrc === "user" ? logoutOrRegister : toCart}>
          {Text[1].includes(".") ? <b>{Text[1]}</b> : Text[1]}
        </p>
      </div>
    </BoxStyled>
  );
}

export default Box;

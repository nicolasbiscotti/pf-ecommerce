import React from "react";
import { BoxStyled } from "./BoxStyled";
import userIcon from "../../../../../utilsStyles/utilsImages/loggin-icon.png";
import cartIcon from "../../../../../utilsStyles/utilsImages/cart-icon.png";
import { useNavigate } from "react-router-dom";

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

  return (
    <BoxStyled>
      <img src={Imgsrc === "user" ? userIc : cartIc} alt={Imgalt} />
      <div>
        <p onClick={loginOrHome}>{Text[0]}</p>

        <p onClick={logoutOrRegister}>
          {Text[1].includes(".") ? <b>{Text[1]}</b> : Text[1]}
        </p>
      </div>
    </BoxStyled>
  );
}

export default Box;

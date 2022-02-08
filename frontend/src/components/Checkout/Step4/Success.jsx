import React from "react";
import { MdCheckCircle } from "react-icons/md";
import { NavlinkHome, SuccessStyled } from "./SuccessStyled";

function Success() {
  return (
    <SuccessStyled>
      <MdCheckCircle
        style={{ color: "rgba(0,128,0,.75)", fontSize: "10rem" }}
      />
      <h1>Your purchase has been confirmed !</h1>
      <p>Brevely you will recive an email with the data of your transaction.</p>
      <NavlinkHome to="/">
        <p>
          <br /> Return to Home
        </p>
      </NavlinkHome>
    </SuccessStyled>
  );
}

export default Success;

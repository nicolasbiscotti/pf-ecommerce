import React from "react";
import { DetailbarStyled } from "./styles";
import { NavLink } from "react-router-dom";
import { StyledButton } from "../../Login/Styled/StyledButton";

const Detailtbar = function ({ cart }) {
  const subtotal = cart.getSubtotalPrice();
  const shipping = subtotal > 0 ? 7 : 0;

  return (
    <DetailbarStyled>
      <ul>
        <li key={0}>
          <span className="item">Subtotal:</span>{" "}
          <span className="price">${subtotal}.00</span>
        </li>
        <li key={1}>
          <span className="item">Shipping:</span>{" "}
          <span className="price">${shipping}.00</span>
        </li>
        <br />
        <li key={2}>
          <span className="item">
            <b>Total:</b>
          </span>{" "}
          <span className="price">
            <b>${subtotal + shipping}.00</b>
          </span>
        </li>
      </ul>
      <NavLink to="/checkout">
        <StyledButton>Pagar</StyledButton>
      </NavLink>
    </DetailbarStyled>
  );
};

export default Detailtbar;

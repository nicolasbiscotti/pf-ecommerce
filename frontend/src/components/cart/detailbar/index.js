import React from "react";
import { DetailbarStyled } from "./styles";
import { useNavigate } from "react-router-dom";
import { StyledButton as Button } from "../../Login/Styled/StyledButton";

const Detailtbar = function ({ cart }) {
  const navigate = useNavigate();

  const subtotal = cart.getSubtotalPrice();
  const shipping = subtotal > 0 ? 7 : 0;

  function checkout() {
    navigate(`/checkout?shipping=${shipping}`);
  }

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
      <br />
      <Button onClick={checkout}>Checkout</Button>
    </DetailbarStyled>
  );
};

export default Detailtbar;

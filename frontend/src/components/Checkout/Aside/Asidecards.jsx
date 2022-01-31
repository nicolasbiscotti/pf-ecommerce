import React from "react";
import { AsideStyled } from "./AsideStyled";

export function Asidecards({ cart, shippingAmount }) {
  return (
    <AsideStyled>
      {cart.products.length > 0 &&
        cart.products.map((i) => (
          <div key={i.name}>
            <div className="card-container">
              <img src={i.img} alt="" />
              <h3>{i.name}</h3>
              <h5>Price: ${i.price} USD</h5>
              <h5>Quantity: {i.count}</h5>
            </div>
            <div className="amount-container">
              <span>Product : </span>
              <span>${i.price * i.count}</span>
            </div>
          </div>
        ))}
      {/* Total */}
      <div
        className="amount-container"
        style={{
          marginTop: "0.5rem",
          borderTop: "none",
          marginBottom: "2rem",
        }}
      >
        <span>Total (plus shipping) : </span>
        <span>${cart.getSubtotalPrice() + Number(shippingAmount)}</span>
      </div>
    </AsideStyled>
  );
}

export default Asidecards;

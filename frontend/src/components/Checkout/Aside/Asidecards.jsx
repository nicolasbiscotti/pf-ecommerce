import React from "react";
import { AsideStyled } from "./AsideStyled";

export function Asidecards({ order }) {
  return (
    <AsideStyled>
      {/* order.items && order.items.map(i =>{ }) */}
      <div className="card-container">
        <img
          src="https://blog.movical.net/wp-content/uploads/2019/11/encontrar-el-archivo-boot.img-en-un-tel%C3%A9fono-Huawei-min-1024x1024.jpg"
          alt=""
        />
        <h3>Samsung Galaxy Inter Vs</h3>
        <h5>Price: $1000 USD</h5>
        <h5>Quantity: </h5>
      </div>
      <div className="amount-container">
        <span>Product : </span>
        <span>$1000</span>
      </div>
      {/*  */}

      {/* Total */}
      <div
        className="amount-container"
        style={{
          marginTop: "0.5rem",
          borderTop: "none",
          marginBottom: "2rem",
        }}
      >
        <span>Total : </span>
        <span>$1000</span>
      </div>
    </AsideStyled>
  );
}

export default Asidecards;

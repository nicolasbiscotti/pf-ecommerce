import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../common/button/Button";
import { CardOrderStyled } from "./styles";

const OrderCard = function ({ order, props }) {
  return (
    <CardOrderStyled props={props}>
      <div>
          <p>
            <b>N°</b> {order.id}&emsp;&emsp;
            <b>Date</b> {order.date}&emsp;&emsp;
            <b>Status</b> {order.status.toUpperCase()}
          </p>
          <p>
            <b>Address</b> {order.address}
          </p>
      </div>
      <hr />
      <div>
        {order.details.map((product) => (
          <div className="product" key={product.id}>
            <div className="imgContainer">
              <img src={product.mainImg} alt={product.name} />
            </div>
            <div style={{ width: "auto" }}>
              <p>
                {product.name}
                <br />
                <small>
                  <b>Amount</b> {product.amount}
                  <br />
                  <b>Price c/u</b> ${product.price}
                  <br />
                  <b>Total</b> ${product.price * product.amount}
                </small>
              </p>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className="cardOrderBottom">
        <Link to={`/orders/${order.id}`}><Button>Details</Button></Link>
      </div>
    </CardOrderStyled>
  );
};

export default OrderCard;

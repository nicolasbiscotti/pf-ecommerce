import React from "react";
import {CardOrderStyled} from "./styles";

const OrderCard = function({order}){
  return (
    <CardOrderStyled>
      <div>
        <div>
          <h2>N° {order.id} </h2>
          <h2>Date: {order.date} </h2>
          <h4>Status: {order.status.toUpperCase()} </h4>
          <h4>Direction: </h4>
        </div>
        <span>Ver detalles</span>
      </div>
      <div>
        {}
      </div>
    </CardOrderStyled>
  )
}

export default OrderCard;
import React from "react";
import {CardOrderStyled} from "./styles";

const OrderCard = function({order}){
  return (
    <CardOrderStyled>
      <h1>N° {order.id} </h1>
      <h2>Date: {order.date} </h2>
      <h5>Status: {order.status.toUpperCase()} </h5>
    </CardOrderStyled>
  )
}

export default OrderCard;
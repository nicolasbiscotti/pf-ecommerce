import React from "react";
import { Button } from "../../../common/button/Button";
import {CardOrderStyled} from "./styles";

const OrderCard = function({order}){
  console.log(order)
  return (
    <CardOrderStyled>
      <div>
        <div>
          <p>N° {order.id} </p>
          <p>Date: {order.date.split('T')[0]} </p>
          <p>Status: {order.status.toUpperCase()} </p>
          <p>Address: {order.address}</p>
        </div>
        <span><Button>Ver detalles</Button></span>
      </div>
      <div>
        {}
      </div>
    </CardOrderStyled>
  )
}

export default OrderCard;
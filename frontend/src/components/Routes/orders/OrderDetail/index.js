import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetailUser } from "../../../../redux/reducers/orders/actions";
import {OrdersUserStyled} from "../styles";

const OrderDetail = function(){
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getOrderDetailUser({id: 1}))
  },[dispatch])
  return (
    <OrdersUserStyled>
      holo
    </OrdersUserStyled>
  )
}

export default OrderDetail;
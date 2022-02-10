import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetailUser } from "../../../../redux/reducers/orders/actions";
import OrderCard from "../card";
import {OrdersUserStyled} from "../styles";

const OrderDetail = function(){
  const { id } = useParams()
  const { ordersDetails } = useSelector((state) => state.ordersAdmin)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getOrderDetailUser({id}))
  }, [dispatch, id])
  return (
    <OrdersUserStyled>
      {
        ordersDetails.hasOwnProperty('id') &&
          <OrderCard order={ordersDetails} props="noLink"/>
      }
    </OrdersUserStyled>
  )
}

export default OrderDetail;
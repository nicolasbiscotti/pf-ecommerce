import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrdersUserStyled } from "./styles";
import { getAllOrdersUser } from "../../../redux/reducers/orders/actions";
import OrderCard from "./card";

const OrderUser = function(){
  const dispatch=useDispatch();
  const orders = useSelector(state=>state.ordersAdmin);
  const [params,setParams] = useState({...orders});

  dispatch(getAllOrdersUser());

  useEffect(()=>{
    setParams({...orders})
  },[orders,setParams]);

  return (
    <OrdersUserStyled>
      <h1>Orders History</h1>
      <div>

      </div>
      <div>
        {params.orders.map((e)=><OrderCard order={e} />)}
      </div>
    </OrdersUserStyled>
  )
}

export default OrderUser;
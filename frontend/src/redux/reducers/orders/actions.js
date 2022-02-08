import { axiosGet } from "../../../services/axios";
import { actionCreator } from "../products/actions";
import { GET_ONE_ORDER, GET_ORDERS_LIST } from "./const";

export const getAllOrdersAdmin = ({ page }) => {
  return async (dispatch) => {
    const allOrdersAdmin = await axiosGet(`/orders?page=${page}`);
    dispatch(actionCreator(GET_ORDERS_LIST, allOrdersAdmin));
  };
};


export const getOrderDetailAdmin = ({ id }) => {
  return async (dispatch) => {
    const orderDetail = await axiosGet(`/orders/${id}`);
    dispatch(actionCreator(GET_ONE_ORDER, orderDetail));
  };
};
import { axiosGet, axiosPut } from "../../../services/axios";
import { actionCreator } from "../products/actions";
import { GET_ONE_ORDER, GET_ORDERS_LIST, UPDATE_STATUS_ONE_ORDER } from "./const";

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

export const updateOrderStatusDetailAdmin = ({ id, status }) => {
  return async (dispatch) => {
    console.log(id, status)
    const isUpdated = await axiosPut(`/orders/${id}`, {id, status});
    getAllOrdersAdmin()
    dispatch(actionCreator(UPDATE_STATUS_ONE_ORDER, isUpdated));
  };
};
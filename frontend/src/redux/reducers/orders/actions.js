import { axiosGet } from "../../../services/axios";
import { actionCreator } from "../products/actions";
import { GET_ORDERS_LIST } from "./const";

export const getAllOrdersAdmin = ({ page }) => {
  return async (dispatch) => {
    const allOrdersAdmin = await axiosGet(`/orders?page=${page}`);
    dispatch(actionCreator(GET_ORDERS_LIST, allOrdersAdmin));
  };
};

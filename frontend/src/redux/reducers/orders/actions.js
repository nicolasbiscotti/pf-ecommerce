import { axiosGet } from "../../../services/axios";
import { actionCreator } from "../products/actions";
import { GET_ORDERS_LIST } from "./const";

export const getAllOrdersAdmin = ({ page }) => {
  return async (dispatch) => {
    const allProductsAdmin = await axiosGet(`/products/admin?page=${page}`);
    dispatch(actionCreator(GET_ORDERS_LIST, allProductsAdmin));
  };
};

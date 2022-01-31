import { axiosGet } from "../../../services/axios";
import { actionCreator } from "../products/actions";
import { SET_DATA_PA } from "./const";

export const getAllProductsAdmin = ({ page }) => {
  return async (dispatch) => {
    const allProductsAdmin = await axiosGet(`/products/admin?page=${page}`);
    dispatch(actionCreator(SET_DATA_PA, allProductsAdmin));
  };
};

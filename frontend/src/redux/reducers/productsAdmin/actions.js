import { corsAxiosGet } from "../../../services/corsAxios";
import { actionCreator } from "../products/actions";
import { SET_DATA_PA } from "./const";

export const getAllProductsAdmin = ({ page }) => {
  return async (dispatch) => {
    const allProductsAdmin = await corsAxiosGet(`/products/admin?page=${page}`);
    dispatch(actionCreator(SET_DATA_PA, allProductsAdmin));
  };
};

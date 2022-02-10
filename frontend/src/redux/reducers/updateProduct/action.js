import { actionGenerator } from "../../../services/actionGenerator";
import { corsAxiosGet, corsAxiosPut } from "../../../services/corsAxios";
import { SET_UP_PRODUCT, SET_UP_RES_UP } from "./const";

export const getDetailProductAdmin = (id) => {
  return async (dispatch) => {
    try {
      const product = await corsAxiosGet(`/products/admin/${id}`);
      dispatch(actionGenerator(SET_UP_PRODUCT, product));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (body) => {
  return async (dispatch) => {
    try {
      const resUpdateProduct = await corsAxiosPut(`/products`, body);
      dispatch(actionGenerator(SET_UP_RES_UP, resUpdateProduct));
      alert(resUpdateProduct.msg);
    } catch (error) {
      console.log(error);
    }
  };
};

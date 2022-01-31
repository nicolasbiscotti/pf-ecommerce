import { actionGenerator } from "../../../services/actionGenerator";
import { axiosGet, axiosPut } from "../../../services/axios";
import { SET_UP_PRODUCT, SET_UP_RES_UP } from "./const";

export const getDetailProductAdmin = (id) => {
  return async (dispatch) => {
    try {
      const product = await axiosGet(`/products/admin/${id}`);
      dispatch(actionGenerator(SET_UP_PRODUCT, product));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (body) => {
  return async (dispatch) => {
    try {
      const resUpdateProduct = await axiosPut(`/products`, body);
      dispatch(actionGenerator(SET_UP_RES_UP, resUpdateProduct));
      alert(resUpdateProduct.msg);
    } catch (error) {
      console.log(error);
    }
  };
};

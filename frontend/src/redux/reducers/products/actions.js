import axios from "axios";
import { GET_ALL_PRODUCTS, GET_ALL_CATEGORIES } from "./const";

export const LOADING = "LOADING";
export const SET_PRODUCT_DETAIL = "SET_PRODUCT_DETAIL";

export function loading() {
  return {
    type: LOADING,
  };
}

export function setProductDetail(productDetail) {
  return {
    type: SET_PRODUCT_DETAIL,
    payload: productDetail,
  };
}

export function fetchProductDetail(productId) {
  return async function (dispatch) {
    dispatch(loading());
    try {
      const res = await axios.get(`/products/id/${productId}`);
      dispatch(setProductDetail(res.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function actionCreator(actionType, data) {
  return {
    type: actionType,
    payload: data,
  };
}

export const fetchAllProducts = function () {
  return async function (dispatch) {
    dispatch(loading());
    try {
      const res = await axios.get("/products");
      dispatch(actionCreator(GET_ALL_PRODUCTS, res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchAllCategories = function () {
  return async function (dispatch) {
    dispatch(loading());
    try {
      const res = await axios.get("/categories");
      dispatch(actionCreator(GET_ALL_CATEGORIES, res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

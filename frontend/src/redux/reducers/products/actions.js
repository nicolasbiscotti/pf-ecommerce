import axios from "axios";
import { GET_ALL_PRODUCTS } from "./const";

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

function setAllProducts(data){
  return {
    type: GET_ALL_PRODUCTS,
    payload: data
  }
}

export const fetchAllProducts = function (limit=100,offset=0){
  return async function (dispatch){
    dispatch(loading())
    try{
      const res= await axios.get(`http://localhost:3001/products?limit=${limit}&offset=${offset}`);
      dispatch(setAllProducts(res.data))
    }catch(error){
      console.log(error)
    }
  }
}
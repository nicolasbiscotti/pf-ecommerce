import axios from "axios";

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

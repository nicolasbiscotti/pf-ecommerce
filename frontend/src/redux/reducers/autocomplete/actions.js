import axios from "axios";
import { GET_ALL_NAMES } from "./const";

export function actionCreator(actionType, data) {
  return {
    type: actionType,
    payload: data,
  };
}

export const fetchAllProductsNames = function () {
  return async function (dispatch) {
    try {
      const res = await axios.get("/products/allnames");
      dispatch(actionCreator(GET_ALL_NAMES, res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

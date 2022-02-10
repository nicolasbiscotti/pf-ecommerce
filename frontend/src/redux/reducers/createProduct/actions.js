import { actionGenerator } from "../../../services/actionGenerator";
import { corsAxiosPost } from "../../../services/corsAxios";
import { SET_RES_BACK_CP } from "./const";

export const reqCreteProduct = function (body) {
  return async function (dispatch) {
    try {
      const resBackCreateProduct = await corsAxiosPost("/products", body);
      dispatch(actionGenerator(SET_RES_BACK_CP, resBackCreateProduct));
      alert(resBackCreateProduct.msg);
    } catch (error) {
      console.log(error);
    }
  };
};

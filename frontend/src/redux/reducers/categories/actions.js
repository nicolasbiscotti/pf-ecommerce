import { actionGenerator } from "../../../services/actionGenerator";
import { axiosGet } from "../../../services/axios";
import { SET_ALL_CATEGORIES } from "./const";

export const getAllCategories = function () {
  return async function (dispatch) {
    try {
      const categories = await axiosGet("/categories");
      dispatch(actionGenerator(SET_ALL_CATEGORIES, categories));
    } catch (error) {
      console.log(error);
    }
  };
};

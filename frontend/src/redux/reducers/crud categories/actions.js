import { actionGenerator } from "../../../services/actionGenerator";
import { axiosPost } from "../../../services/axios";
import { getAllCategories } from "../categories/actions";
import { CREATE_CATEGORY } from "./const";

export const reqCreateCategory = function (body) {
  return async function (dispatch) {
    try {
      const createCategory = await axiosPost("/categories", body);
      dispatch(actionGenerator(CREATE_CATEGORY, createCategory));
      dispatch(getAllCategories());
    } catch (error) {
      console.log(error);
    }
  };
};

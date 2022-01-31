import axios from "axios";
import { actionGenerator } from "../../../services/actionGenerator";
import { axiosPost } from "../../../services/axios";
import { getAllCategories } from "../categories/actions";
import { CREATE_CATEGORY, DELETE_CATEGORY, RESET_CATEGORY } from "./const";

export const reqCreateCategory = function (body) {
  return async function (dispatch) {
    try {
      const createCategory = await axiosPost("/categories", body);
      dispatch(actionGenerator(CREATE_CATEGORY, createCategory));
      dispatch(getAllCategories());
      if (createCategory.msg) {
        dispatch(actionGenerator(RESET_CATEGORY));
      }
      alert(createCategory.msg);
    } catch (error) {
      console.log(error);
    }
  };
};

export const reqDeleteCategory = function (id) {
  return async function (dispatch) {
    try {
      const deleteCategory = await axios.delete(`/categories/${id}`);
      dispatch(actionGenerator(DELETE_CATEGORY, deleteCategory));
      dispatch(getAllCategories());
    } catch (error) {
      console.log(error);
    }
  };
};

import { actionGenerator } from "../../../services/actionGenerator";
import { axiosGet } from "../../../services/axios";
import { SET_ALL_CATEGORIES, SET_HOME_CATEGORIES } from "./const";

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

export const getHomeCategories = function () {
  return async function (dispatch) {
    try {
      const categories = await axiosGet("/categories");
      dispatch(actionGenerator(SET_HOME_CATEGORIES, categories));
    } catch (error) {
      console.log(error);
    }
  };
};

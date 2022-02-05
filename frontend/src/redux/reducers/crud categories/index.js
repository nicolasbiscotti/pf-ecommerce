import { SET_ALL_CATEGORIES } from "../categories/const";
import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  RESET_CATEGORY,
  SET_CREATE_CATEGORY_IMG,
  SET_CREATE_CATEGORY_NAME,
} from "./const";

const initialState = {
  name: "",
  img: "",
  msg: "",
};

export const createCategory = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CREATE_CATEGORY_NAME:
      return {
        ...state,
        name: payload,
      };
    case SET_CREATE_CATEGORY_IMG:
      return {
        ...state,
        img: payload,
      };

    case CREATE_CATEGORY:
      return {
        ...state,
        createCategory: payload,
      };
    case SET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: payload,
      };
    case RESET_CATEGORY:
      return {
        ...state,
        name: "",
        img: "",
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        allCategories: payload,
      };

    default:
      return state;
  }
};

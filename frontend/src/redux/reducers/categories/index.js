import { SET_ALL_CATEGORIES, SET_HOME_CATEGORIES } from "./const";

const initialState = {
  allCategories: [],
  homeCategories: [],
};

export const categories = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: payload,
      };
    case SET_HOME_CATEGORIES:
      return {
        ...state,
        homeCategories: payload
      };
    default:
      return state;
  }
};

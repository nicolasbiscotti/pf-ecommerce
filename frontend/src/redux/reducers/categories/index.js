import { SET_ALL_CATEGORIES, SET_HOME_CATEGORIES } from "./const";

const initialState = {
  isLoading: true,
  allCategories: [],
  homeCategories: [],
};

export const categories = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: payload,
        isLoading: false,
      };
    case SET_HOME_CATEGORIES:
      return {
        ...state,
        homeCategories: payload.slice(0, 6),
        isLoading: false,

      };
    default:
      return state;
  }
};

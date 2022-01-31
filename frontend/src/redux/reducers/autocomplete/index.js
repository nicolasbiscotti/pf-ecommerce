import { GET_ALL_NAMES } from "./const";

const initialState = [];

export const productsNames = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_NAMES:
      return [...payload.productsNames];
    default:
      return state;
  }
};

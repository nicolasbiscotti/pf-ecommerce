import { LOADING, SET_PRODUCT_DETAIL } from "./actions";

const initialState = {
  isLoading: false,
  product: {},
};

export const products = (state = initialState, { type, payload }) => {
  switch (type) {
    /* case value:
      return; */
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_PRODUCT_DETAIL:
      return {
        ...state,
        product: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

import { LOADING, SET_PRODUCT_DETAIL } from "./actions";
import { GET_ALL_PRODUCTS, GET_ALL_CATEGORIES } from "./const";

const initialState = {
  isLoading: false,
  product: {},
  products: [],
  categories: []
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
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: payload,
        isLoading: false
      }
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: payload,
        isLoading: false
      }
    default:
      return state;
  }
};

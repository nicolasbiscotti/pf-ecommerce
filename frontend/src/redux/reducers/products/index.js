import { LOADING, SET_PRODUCT_DETAIL } from "./actions";
import { GET_ALL_PRODUCTS, GET_ALL_CATEGORIES } from "./const";

const initialStore = {
  isLoading: false,
  product: {},
  products: [],
  categories: [],
  category: {id:0,name:'all'}
};

export const products = (store = initialStore, { type, payload }) => {
  switch (type) {
    /* case value:
      return; */
    case LOADING:
      return {
        ...store,
        isLoading: true,
      };
    case SET_PRODUCT_DETAIL:
      return {
        ...store,
        product: payload,
        isLoading: false,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...store,
        products: payload,
        isLoading: false
      }
    case GET_ALL_CATEGORIES:
      return {
        ...store,
        categories: payload,
        isLoading: false
      }
    default:
      return store;
  }
};

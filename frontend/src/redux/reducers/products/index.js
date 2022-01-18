import { LOADING, SET_PRODUCT_DETAIL } from "./actions";

const initialStore = {
  isLoading: false,
  product: {},
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

    default:
      return store;
  }
};

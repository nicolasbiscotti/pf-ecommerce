import {
  SET_CREATE_PRODUCT_NAME,
  SET_CREATE_PRODUCT_PURCHASE_PRICE,
} from "./const";

const initialState = {
  name: "",
  salePrice: 0,
  purchasePrice: 0,
  stock: 0,
  description: "",
  mainImg: "",
  imgs: [],
  categories: [],
  suppliers: [],
};

export const createProduct = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CREATE_PRODUCT_NAME:
      return {
        ...state,
        name: payload,
      };
    case SET_CREATE_PRODUCT_PURCHASE_PRICE:
      return {
        ...state,
        purchasePrice: payload,
      };
    default:
      return state;
  }
};

import {
  SET_CP_DESCRIPTION,
  SET_CP_MAIN_IMG,
  SET_CP_STOCK,
  SET_CREATE_PRODUCT_NAME,
  SET_CREATE_PRODUCT_PURCHASE_PRICE,
  SET_CREATE_SALE_PRICE,
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
    case SET_CREATE_SALE_PRICE:
      return {
        ...state,
        salePrice: payload,
      };
    case SET_CREATE_PRODUCT_PURCHASE_PRICE:
      return {
        ...state,
        purchasePrice: payload,
      };
    case SET_CP_STOCK:
      return {
        ...state,
        stock: payload,
      };
    case SET_CP_DESCRIPTION:
      return {
        ...state,
        description: payload,
      };
    case SET_CP_MAIN_IMG:
      return {
        ...state,
        mainImg: payload,
      };
    default:
      return state;
  }
};

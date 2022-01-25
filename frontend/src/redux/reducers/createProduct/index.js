import {
  SET_CP_CATEGORIES,
  SET_CP_DESCRIPTION,
  SET_CP_IMGS,
  SET_CP_MAIN_IMG,
  SET_CP_STOCK,
  SET_CP_SUPPLIERS,
  SET_CREATE_PRODUCT_NAME,
  SET_CREATE_PRODUCT_PURCHASE_PRICE,
  SET_CREATE_SALE_PRICE,
  SET_RES_BACK_CP,
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
  resBackCreateProduct: null,
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
        salePrice: parseInt(payload),
      };
    case SET_CREATE_PRODUCT_PURCHASE_PRICE:
      return {
        ...state,
        purchasePrice: parseInt(payload),
      };
    case SET_CP_STOCK:
      return {
        ...state,
        stock: parseInt(payload),
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
    case SET_CP_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case SET_CP_SUPPLIERS:
      return {
        ...state,
        suppliers: payload,
      };
    case SET_CP_IMGS:
      return {
        ...state,
        imgs: payload,
      };
    case SET_RES_BACK_CP:
      return {
        ...state,
        resBackCreateProduct: payload,
      };
    default:
      return state;
  }
};

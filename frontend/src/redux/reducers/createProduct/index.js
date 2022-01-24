import {
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
      const copyPayloadSalePrice = payload;
      return {
        ...state,
        salePrice: parseInt(copyPayloadSalePrice),
      };
    case SET_CREATE_PRODUCT_PURCHASE_PRICE:
      const copyPayloadPurchasePrice = payload;
      return {
        ...state,
        purchasePrice: parseInt(copyPayloadPurchasePrice),
      };
    case SET_CP_STOCK:
      const copyPayloadStock = payload;
      return {
        ...state,
        stock: parseInt(copyPayloadStock),
      };
    default:
      return state;
  }
};

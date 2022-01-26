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
  salePrice: "0",
  purchasePrice: "0",
  stock: "0",
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
    case SET_CP_CATEGORIES:
      const stateCategories = state.categories;
      const newCategories = stateCategories.includes(payload)
        ? stateCategories.filter((item) => item !== payload)
        : [...stateCategories, payload];
      return {
        ...state,
        categories: newCategories,
      };
    case SET_CP_SUPPLIERS:
      const stateSuppliers = state.suppliers;
      const newSuppliers = stateSuppliers.includes(payload)
        ? stateSuppliers.filter((item) => item !== payload)
        : [...stateSuppliers, payload];
      return {
        ...state,
        suppliers: newSuppliers,
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

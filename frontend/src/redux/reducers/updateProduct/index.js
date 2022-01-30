import { setStateArr } from "../../../services/setStateArr";
import {
  SET_UP_CATEGORIES,
  SET_UP_DESCRIPTION,
  SET_UP_IMGS,
  SET_UP_MAIN_IMG,
  SET_UP_NAME,
  SET_UP_PURCHASE_PRICE,
  SET_UP_SALE_PRICE,
  SET_UP_STOCK,
  SET_UP_SUPPLIERS,
} from "./const";

const initialState = {
  name: "",
  salePrice: "",
  purchasePrice: "",
  stock: "",
  description: "",
  mainImg: "",
  imgs: [],
  categories: [],
  suppliers: [],
  resBackUpdateProduct: {},
};

export const updateProduct = (state = initialState, { type, payload }) => {
  const cases = {
    [SET_UP_NAME]: () => ({ ...state, name: payload }),
    [SET_UP_SALE_PRICE]: () => ({ ...state, salePrice: payload }),
    [SET_UP_PURCHASE_PRICE]: () => ({ ...state, purchasePrice: payload }),
    [SET_UP_STOCK]: () => ({ ...state, stock: payload }),
    [SET_UP_DESCRIPTION]: () => ({ ...state, description: payload }),
    [SET_UP_MAIN_IMG]: () => ({ ...state, mainImg: payload }),
    [SET_UP_CATEGORIES]: () => {
      setStateArr({ nameState: "categories", payload, state });
    },
    [SET_UP_SUPPLIERS]: () => {
      setStateArr({ nameState: "suppliers", payload, state });
    },
    [SET_UP_IMGS]: () => ({ ...state, imgs: payload }),
  };
  return cases[type] ? cases[type]() : state;
};

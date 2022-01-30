import { setStateSelectBox } from "../../../services/setStateSelectBox";
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
  const setState = (name) => {
    return { ...state, [name]: payload };
  };
  const cases = {
    [SET_UP_NAME]: () => setState("name"),
    [SET_UP_SALE_PRICE]: () => setState("salePrice"),
    [SET_UP_PURCHASE_PRICE]: () => setState("purchasePrice"),
    [SET_UP_STOCK]: () => setState("stock"),
    [SET_UP_DESCRIPTION]: () => setState("description"),
    [SET_UP_MAIN_IMG]: () => setState("mainImg"),
    [SET_UP_CATEGORIES]: () => {
      return setStateSelectBox({ nameState: "categories", payload, state });
    },
    [SET_UP_SUPPLIERS]: () => {
      return setStateSelectBox({ nameState: "suppliers", payload, state });
    },
    [SET_UP_IMGS]: () => ({ ...state, imgs: payload }),
  };
  return (cases[type] && cases[type]()) || state;
};

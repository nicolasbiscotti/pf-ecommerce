import { setStateSelectBox } from "../../../services/setStateSelectBox";
import {
  SET_UP_CATEGORIES,
  SET_UP_DESCRIPTION,
  SET_UP_DISCOUNT,
  SET_UP_IMGS,
  SET_UP_MAIN_IMG,
  SET_UP_NAME,
  SET_UP_PRODUCT,
  SET_UP_PURCHASE_PRICE,
  SET_UP_RES_UP,
  SET_UP_SALE_PRICE,
  SET_UP_STOCK,
  SET_UP_SUPPLIERS,
} from "./const";
import { setUpProduct } from "./services/setUpProduct";

const initialState = {
  name: "",
  salePrice: "",
  purchasePrice: "",
  stock: "",
  discount: "",
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
    [SET_UP_DISCOUNT]: () => setState("discount"),
    [SET_UP_DESCRIPTION]: () => setState("description"),
    [SET_UP_MAIN_IMG]: () => setState("mainImg"),
    [SET_UP_IMGS]: () => setState("imgs"),
    [SET_UP_CATEGORIES]: () => {
      return setStateSelectBox({ nameState: "categories", payload, state });
    },
    [SET_UP_SUPPLIERS]: () => {
      return setStateSelectBox({ nameState: "suppliers", payload, state });
    },
    [SET_UP_PRODUCT]: () => setUpProduct({ state, payload }),
    [SET_UP_RES_UP]: () => setState("resBackUpdateProduct"),
  };
  return (cases[type] && cases[type]()) || state;
};

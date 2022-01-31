import {
  SET_UP_CATEGORIES,
  SET_UP_SUPPLIERS,
} from "../../../../redux/reducers/updateProduct/const";

export const propsSelectCategories = {
  type: SET_UP_CATEGORIES,
  nameReducer: "updateProduct",
  nameKey: "categories",
  title: "CATEGORIES",
};
export const propsSelectSuppliers = {
  type: SET_UP_SUPPLIERS,
  nameReducer: "updateProduct",
  nameKey: "suppliers",
  title: "SUPPLIERS",
};

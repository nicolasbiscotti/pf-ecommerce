import { getAllCategories } from "../../../../redux/reducers/categories/actions";
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
} from "../../../../redux/reducers/createProduct/const";
import { getAllSuppliers } from "../../../../redux/reducers/suppliers/action";

export const propsCategories = {
  nameReducer: "categories",
  nameState: "allCategories",
  action: getAllCategories,
};
export const propsSuppliers = {
  nameReducer: "suppliers",
  nameState: "allSuppliers",
  action: getAllSuppliers,
};
export const propsName = {
  type: SET_CREATE_PRODUCT_NAME,
  nameReducer: "createProduct",
};
export const propsSalePrice = {
  placeholder: "Sale price",
  type: SET_CREATE_SALE_PRICE,
  nameReducer: "createProduct",
  nameKey: "salePrice",
};
export const propsPurchesePrice = {
  placeholder: "Purchase price",
  type: SET_CREATE_PRODUCT_PURCHASE_PRICE,
  nameReducer: "createProduct",
  nameKey: "purchasePrice",
};
export const propsStock = {
  placeholder: "Stock",
  type: SET_CP_STOCK,
  nameReducer: "createProduct",
  nameKey: "stock",
};

export const propsDescription = {
  type: SET_CP_DESCRIPTION,
  nameReducer: "createProduct",
};
export const propsMainImg = {
  type: SET_CP_MAIN_IMG,
};
export const propsImgs = {
  type: SET_CP_IMGS,
};
export const propsSelectCategories = {
  type: SET_CP_CATEGORIES,
  nameReducer: "createProduct",
  nameKey: "categories",
  title: "CATEGORIES",
};
export const propsSelectSuppliers = {
  type: SET_CP_SUPPLIERS,
  nameReducer: "createProduct",
  nameKey: "suppliers",
  title: "SUPPLIERS",
};

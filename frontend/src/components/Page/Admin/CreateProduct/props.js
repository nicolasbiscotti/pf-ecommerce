import { getAllCategories } from "../../../../redux/reducers/categories/actions";
import {
  SET_CP_STOCK,
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

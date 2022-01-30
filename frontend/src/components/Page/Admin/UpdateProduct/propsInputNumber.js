import {
  SET_UP_PURCHASE_PRICE,
  SET_UP_SALE_PRICE,
  SET_UP_STOCK,
} from "../../../../redux/reducers/updateProduct/const";

export const propsSalePrice = {
  placeholder: "Sale price",
  type: SET_UP_SALE_PRICE,
  nameReducer: "updateProduct",
  nameKey: "salePrice",
};
export const propsPurchesePrice = {
  placeholder: "Purchase price",
  type: SET_UP_PURCHASE_PRICE,
  nameReducer: "updateProduct",
  nameKey: "purchasePrice",
};
export const propsStock = {
  placeholder: "Stock",
  type: SET_UP_STOCK,
  nameReducer: "updateProduct",
  nameKey: "stock",
};

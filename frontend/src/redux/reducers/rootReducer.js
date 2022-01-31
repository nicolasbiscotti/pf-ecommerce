import { combineReducers } from "redux";
import { products } from "./products";
import { forms } from "./forms";
import { filters } from "./filters";
import { categories } from "./categories";
import { suppliers } from "./suppliers";
import { createProduct } from "./createProduct";
import { createCategory } from "./crud categories";
import { message } from "./messages";
import { cart } from "./cart"
import { productsNames } from "./autocomplete";

export const rootReducer = combineReducers({
  products,
  forms,
  filters,
  categories,
  cart,
  suppliers,
  createProduct,
  createCategory,
  message,
  productsNames,
});

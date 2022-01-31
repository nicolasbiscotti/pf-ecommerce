import { combineReducers } from "redux";
import { products } from "./products";
import { forms } from "./forms";
import { filters } from "./filters";
import { categories } from "./categories";
import { suppliers } from "./suppliers";
import { createProduct } from "./createProduct";
import { createCategories } from "./crud categories";
import { message } from "./messages";
import { github } from "./github";

export const rootReducer = combineReducers({
  products,
  forms,
  filters,
  categories,
  suppliers,
  createProduct,
  createCategories,
  message,
  github,
});

import { combineReducers } from "redux";
import { products } from "./products";
import { forms } from "./forms";
import { filters } from "./filters";
import { categories } from "./categories";
import { suppliers } from "./suppliers";

export const rootReducer = combineReducers({
  products,
  forms,
  filters,
  categories,
  suppliers,
});

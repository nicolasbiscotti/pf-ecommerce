import { combineReducers } from "redux";
import { products } from "./products";
import { forms } from "./forms";
import { filters } from "./filters";
import { categories } from "./categories";
import { suppliers } from "./suppliers";
import { createProduct } from "./createProduct";
import { createCategories } from "./crud categories";
import { login } from "./login";
import { createCategory } from "./crud categories";
import { cart } from "./cart"
import { productsNames } from "./autocomplete";
import { updateProduct } from "./updateProduct";
import { productsAdmin } from "./productsAdmin";

export const rootReducer = combineReducers({
  products,
  forms,
  filters,
  categories,
  cart,
  suppliers,
  createProduct,
  createCategories,
  login,
  createCategory,
  updateProduct,
  productsAdmin,
  productsNames,
});

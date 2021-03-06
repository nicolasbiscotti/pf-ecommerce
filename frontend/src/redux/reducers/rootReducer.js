import { combineReducers } from "redux";
import { products } from "./products";
import { forms } from "./forms";
import { filters } from "./filters";
import { categories } from "./categories";
import { suppliers } from "./suppliers";
import { createProduct } from "./createProduct";
import { login } from "./login";
import { createCategory } from "./crud categories";
import { cart } from "./cart";
import { productsNames } from "./autocomplete";
import { updateProduct } from "./updateProduct";
import { productsAdmin } from "./productsAdmin";
import { ordersAdmin } from "./orders";
import { geolocation } from "./geolocation";
import { users } from "./users";

export const rootReducer = combineReducers({
  products,
  forms,
  filters,
  categories,
  cart,
  suppliers,
  createProduct,
  login,
  createCategory,
  updateProduct,
  productsAdmin,
  productsNames,
  ordersAdmin,
  geolocation,
  users,
});

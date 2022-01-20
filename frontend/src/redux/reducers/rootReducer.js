import { combineReducers } from "redux";
import { products } from "./products";
import { forms } from "./forms";
import { filters } from "./filters";

export const rootReducer = combineReducers({ products, forms, filters });

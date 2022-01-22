import { getAllCategories } from "../../../../redux/reducers/categories/actions";
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

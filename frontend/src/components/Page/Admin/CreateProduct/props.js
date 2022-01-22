import { getAllCategories } from "../../../../redux/reducers/categories/actions";

export const propsCategories = {
  nameReducer: "categories",
  nameState: "allCategories",
  action: getAllCategories,
};

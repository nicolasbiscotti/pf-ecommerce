import { SELECT_CATEGORY } from "./consts";

const initialStore = {
  isDefault:true
};
  
export const filters = (store = initialStore, { type, payload }) => {
  switch (type) {
    case SELECT_CATEGORY:
      return {
        ...store,
        category:payload,
        isDefault:false
      };
    default:
      return store;
  }
};
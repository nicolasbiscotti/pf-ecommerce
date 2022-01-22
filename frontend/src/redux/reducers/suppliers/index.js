import { SET_ALL_SUPPLIERS } from "./const";

const initialState = {
  allSuppliers: [],
};

export const suppliers = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_SUPPLIERS:
      return {
        ...state,
        allSuppliers: payload,
      };
    default:
      return state;
  }
};

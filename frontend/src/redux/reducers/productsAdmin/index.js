import { SET_DATA_PA } from "./const";
import { setDataPa } from "./services/setDataPa";

const initialState = {
  page: 0,
  productsByPage: 0,
  pageCount: 0,
  productCount: 0,
  products: [],
};
export const productsAdmin = (state = initialState, { type, payload }) => {
  const cases = {
    [SET_DATA_PA]: () => setDataPa({ payload, state }),
  };
  return (cases[type] && cases[type]()) || state;
};

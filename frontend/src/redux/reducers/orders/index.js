import { GET_ORDERS_LIST } from "./const";
import { setDataPa } from "./services/setDataPa";

const initialState = {
  page: 0,
  ordersByPage: 0,
  pageCount: 0,
  ordersCount: 0,
  orders: [],
};
export const ordersAdmin = (state = initialState, { type, payload }) => {
  const cases = {
    [GET_ORDERS_LIST]: () => setDataPa({ payload, state }),
  };
  return (cases[type] && cases[type]()) || state;
};

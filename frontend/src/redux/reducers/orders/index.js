import { GET_ORDERS_LIST } from "./const";
import { setData } from "./services/setData";

const initialState = {
  page: 0,
  ordersByPage: 0,
  pageCount: 0,
  ordersCount: 0,
  orders: [],
  ordersKeys: []
};
export const ordersAdmin = (state = initialState, { type, payload }) => {
  const cases = {
    [GET_ORDERS_LIST]: () => {
      const newData = setData({ payload, state })
      return newData},
  };
  return (cases[type] && cases[type]()) || state;
};

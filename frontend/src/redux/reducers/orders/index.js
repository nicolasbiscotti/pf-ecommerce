import { GET_ORDERS_LIST, GET_ONE_ORDER, UPDATE_STATUS_ONE_ORDER, GET_ORDERS_USER } from "./const";

const initialState = {
  page: 0,
  ordersByPage: 0,
  pageCount: 0,
  ordersCount: 0,
  orders: [],
  ordersDetails: {},
  ordersKeys: [],
  ordersUsers: []
};

export const ordersAdmin = (state = initialState, { type, payload }) => {
  const cases = {
    [GET_ORDERS_LIST]: () => {
      const { page, ordersByPage, pageCount, ordersCount, orders } = payload;

      return { ...state, page, ordersByPage, pageCount, ordersCount, orders }
    },
    [GET_ONE_ORDER]: () => {
      return {...state, ordersDetails: payload }
    },
    [UPDATE_STATUS_ONE_ORDER]: () => {

    }
  };
  return (cases[type] && cases[type]()) || state;
};

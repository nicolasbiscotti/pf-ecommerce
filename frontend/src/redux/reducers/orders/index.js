import { GET_ORDERS_LIST, GET_ONE_ORDER } from "./const";
import { setData } from "./services/setData";

const initialState = {
  page: 0,
  ordersByPage: 0,
  pageCount: 0,
  ordersCount: 0,
  orders: [],
  ordersDetails: {}
};
export const ordersAdmin = (state = initialState, { type, payload }) => {
  const cases = {
    [GET_ORDERS_LIST]: () => {
      return setData({ payload, state })
    },
    [GET_ONE_ORDER]: () => {
      console.log(payload)
      return {...state, ordersDetails: payload }
    }  
  };
  return (cases[type] && cases[type]()) || state;
};

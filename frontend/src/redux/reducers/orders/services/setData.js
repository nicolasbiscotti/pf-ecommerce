export const setData = ({ payload, state }) => {
  const { page, ordersByPage, pageCount, ordersCount, orders, ordersDetails } = payload;
  return {
    ...state,
    page,
    ordersByPage,
    pageCount,
    ordersCount,
    orders,
    ordersDetails,
  };
};

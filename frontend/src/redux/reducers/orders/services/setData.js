export const setData = ({ payload, state }) => {
  const { page, ordersByPage, pageCount, ordersCount, orders } = payload;
  return {
    ...state,
    page,
    ordersByPage,
    pageCount,
    ordersCount,
    orders,
    ordersKeys: Object.keys(orders[0]).slice(1)
  };
};

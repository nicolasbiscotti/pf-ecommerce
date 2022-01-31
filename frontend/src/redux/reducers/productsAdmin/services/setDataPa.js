export const setDataPa = ({ payload, state }) => {
  const { page, productsByPage, pageCount, productCount, products } = payload;
  return {
    ...state,
    page,
    productsByPage,
    pageCount,
    productCount,
    products,
  };
};

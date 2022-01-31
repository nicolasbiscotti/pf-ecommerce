export const setUpProduct = ({ state, payload }) => {
  const {
    name,
    description,
    purchasePrice,
    salePrice,
    mainImg,
    stock,
    discount,
    images,
    suppliers,
    categories,
  } = payload;
  return {
    ...state,
    name,
    description,
    purchasePrice,
    salePrice,
    mainImg,
    stock,
    discount,
    imgs: images.map(({ url }) => url),
    suppliers: suppliers.map(({ id }) => id),
    categories: categories.map(({ id }) => id),
  };
};

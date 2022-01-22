const initialState = {
  name: "",
  salePrice: 0,
  purchasePrice: 0,
  stock: 0,
  description: "",
  mainImg: "",
  imgs: [],
  categories: [],
  suppliers: [],
};

export const createProduct = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

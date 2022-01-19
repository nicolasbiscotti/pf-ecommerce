module.exports = {
  cleanProduct: function (rows) {
    return rows.map((item) => {
      const { id, name, salePrice, mainImg, discount } = item;
      return { id, name, salePrice, mainImg, discount };
    });
  },
};

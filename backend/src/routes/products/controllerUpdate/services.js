const { Product, Image, Supplier, Category } = require("../../../db");
module.exports = {
  validateColumnUpdate: function (product, columns) {
    const columnToUpdate = {};
    const array = Object.entries(columns);
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      const key = element[0];
      const value = element[1];
      if (key && value !== product[key]) {
        columnToUpdate[key] = value;
      }
    }
    return columnToUpdate;
  },
  findOneProduct: async function (id) {
    const product = await Product.findOne({
      where: { id },
      include: [
        {
          model: Category,
          as: "categories",
          through: { attributes: [] },
        },
        {
          model: Image,
          as: "images",
          through: { attributes: [] },
        },
        {
          model: Supplier,
          as: "suppliers",
          through: { attributes: [] },
        },
      ],
    });
    return product;
  },
};

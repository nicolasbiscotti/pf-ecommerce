const { Category } = require("../../../../db");
module.exports = {
  includeCategory: function (idCategory) {
    const includeArray = [
      {
        model: Category,
        as: "categories",
        where: idCategory ? { id: idCategory } : {},
        through: { attributes: [] },
      },
    ];
    return includeArray;
  },
};

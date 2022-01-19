const { Category } = require("../../../../db");
module.exports = {
  includeCategory: function (idCategory) {
    const includeArray = [
      {
        model: Category,
        as: "categories",
        where: idCategory ? { id: idCategory } : {},
        attributes: [],
        through: { attributes: [] },
      },
    ];
    return includeArray;
  },
};

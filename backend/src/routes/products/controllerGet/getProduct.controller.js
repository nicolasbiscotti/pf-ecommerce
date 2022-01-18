const { Product, Category } = require("../../../db");

const getProduct = async (req, res, next) => {
  const { limit, offset } = req.query;
  Product.findAll({
    attributes: ['id','name','salePrice','mainImg','discount'],
    include: { 
      model: Category,
      as: 'categories',
      through: { attributes: []}
    },
    limit: limit?limit:100,
    offset: offset?offset:0
  }).then((r)=>{
    res.json(r)
  }).catch((e)=>{
    next(e)
  })
};

module.exports = getProduct;

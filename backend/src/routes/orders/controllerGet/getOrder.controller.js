const { Order, Product, User } = require("../../../db");
const { cleanOrder } = require("../services/cleanOrder");

const getOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Order.findByPk(id, {
      include: [
        {
          model: User,
          attributes: ["username", "email"],
          as: "user",
        },
        {
          model: Product,
          attributes: ["name"],
          as: "details",
        },
      ],
    });
    
    res.json(cleanOrder(data));
  } catch (error) {
    next(error);
  }
};
module.exports = getOrder;

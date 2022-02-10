const { Order, Product, User } = require("../../db");
const { cleanUserOrder } = require("./services/cleanUserOrder");

const getOrderUser = async (req, res, next) => {
  try {
    // const idUser = req.user.id;
    const { id } = req.params;
    const data = await Order.findByPk(id, {
      include: [
        {
          model: User, 
          attributes: ["username", "id", "email"],
          as: "user",
        },
        {
          model: Product,
          attributes: ["name", "id", "mainImg"],
          as: "details",
        },
      ],
    });
    res.json(cleanUserOrder(data));
  } catch (error) {
    next(error);
  }
};
module.exports = getOrderUser;

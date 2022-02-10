const { Order, Product, User } = require("../../db");
const { ORDER_PER_PAGE } = require("../../constants/orders");
const { cleanUserOrders } = require("./services/cleanUserOrders");

const getOrderUser = async (req, res, next) => {
  try {
    const idUser = req.user.id;
    const { page = 0 } = req.query;
    const { count, rows } = await Order.findAndCountAll({
      where: { userId: idUser },
      attributes: ["id", "date", "status", "address"],
      offset: page * ORDER_PER_PAGE,
      limit: ORDER_PER_PAGE,
      distinct: true,
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
    const data = {
      page: parseInt(page),
      ordersByPage: ORDER_PER_PAGE,
      pageCount: Math.ceil(count / ORDER_PER_PAGE),
      ordersCount: count,
      orders: cleanUserOrders(rows),
    };

    res.json(data);
  } catch (error) {
    next(error);
  }
};
module.exports = getOrderUser;

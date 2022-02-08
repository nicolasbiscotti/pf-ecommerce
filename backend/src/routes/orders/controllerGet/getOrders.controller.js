const { ORDER_PER_PAGE } = require("../../../constants/orders");
const { Order, Product, User } = require("../../../db");
const { cleanOrders } = require("../services/cleanOrders");

const getOrders = async (req, res, next) => {
  try {
    const { page = 0 } = req.query;

    const { count, rows } = await Order.findAndCountAll({
      attributes: ["id", "date", "status", "address"],
      offset: page * ORDER_PER_PAGE,
      limit: ORDER_PER_PAGE,
      distinct: true,
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

    const data = {
      page: parseInt(page),
      ordersByPage: ORDER_PER_PAGE,
      pageCount: Math.ceil(count / ORDER_PER_PAGE),
      ordersCount: count,
      orders: cleanOrders(rows),
    };

    res.json(data);
  } catch (error) {
    next(error);
  }
};
module.exports = getOrders;

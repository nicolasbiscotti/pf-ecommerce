const { Order, Product, User } = require("../../../db");
const { cleanOrders } = require("../services/cleanOrder");

const getOrderUser = async (req, res, next) => {
  try {
    const { idUser } = req.user.id;
    const { page = 0 } = req.query;

    const { count, rows } = await Order.findAndCountAll({
      attributes: ["id", "date", "status", "address"],
      where: { idUser },
      offset: page * ORDER_PER_PAGE,
      limit: ORDER_PER_PAGE,
      distinct: true,
      include: [
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
module.exports = getOrderUser;
const { Order, Product, User } = require("../../db");
const { ORDER_PER_PAGE } = require("../../constants/orders");
const { cleanOrders } = require("../orders/services/cleanOrders");

const getOrderUser = async (req, res, next) => {
  try {
    const idUser  = req.user.id;
    const { page = 0 } = req.query;
    const { count, rows } = await Order.findAndCountAll({
      where: { userId: idUser},
      attributes: ["id", "date", "status", "address"],
      offset: page * ORDER_PER_PAGE,
      limit: ORDER_PER_PAGE,
      distinct: true,
      include: [
        {
          model: User,
          attributes: ["username", "id"],
          as: "user",
        },
        {
          model: Product,
          attributes: ["name"],
          as: "Products",
        },
      ],
    });

    console.log(rows)
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
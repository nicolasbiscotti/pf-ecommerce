const { Order, Product, User } = require("../../../db");

const updateStatusOrder = async (req, res, next) => {
  try {
    //const { status, id } = req.body;
    const { status } = req.body;
    const id = req.params.id;
    const order = await Order.findByPk(id);

    if (order) {
      if (order.dataValues.status === "pending") {
        await Order.update(
          {
            status,
          },
          {
            where: { id },
          }
        );
      } else {
        res
          .status(403)
          .json({ msg: "Order status already on done or cancelled" });
      }

      if (status === "done") {
        const user = await User.findByPk(order.dataValues.userId, {
          attributes: ["firstName", "email"],
        });
        let query = "?" + `name=${user.firstName}&email=${user.email}`;
        res.redirect(307, "/sendmail/dispatch" + query);
      } else {
        res.send({ msg: "Order updated successfully" });
      }
    } else {
      res.status(404).json({ msg: "Could not find order" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusOrder;

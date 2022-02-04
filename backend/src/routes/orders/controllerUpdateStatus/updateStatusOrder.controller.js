const { Order, Product, User } = require("../../../db");

const updateStatusOrder = async (req, res, next) => {
  try {
    const { status, id } = req.body;
    

    const orderUpdate = await Order.update({
      status,
    }, {
      where: {id}
    });
    console.log(orderUpdate)

    res.json({ msg: "Order updated successfully", orderUpdate });
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusOrder;
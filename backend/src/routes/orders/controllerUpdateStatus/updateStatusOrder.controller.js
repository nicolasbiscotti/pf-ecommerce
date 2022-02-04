const { Order, Product, User } = require("../../../db");

const updateStatusOrder = async (req, res, next) => {
  try {
    const { status } = req.body;
    
    const orderUpdate = await Order.update({
      status,
    }, {
      where: { id: id }
    });

    res.json({ msg: "Order updated successfully", orderUpdate });
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusOrder;
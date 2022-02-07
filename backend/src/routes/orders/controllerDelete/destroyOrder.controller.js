const { Order } = require("../../../db");

const destroyOrder = async (req, res, next) => {
  try {
    const { id } = req.params
    const isDestroyed = await Order.destroy({
      where: {id}
    });
    if(isDestroyed) {
      res.json({ msg: "Order destroyed successfully" });
    } else {
      res.json({ msg: "Order haven't destroyed" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = destroyOrder;


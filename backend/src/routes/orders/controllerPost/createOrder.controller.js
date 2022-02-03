const { Order } = require("../../../db");

const createOrder = async (req, res, next) => {
  try {
    const { date, adress, id, products, price, amount } = req.body;
    const newOrder = await Order.create({
      date, adress
    });

    await newOrder.setUser(id) // id del usuario que compra
    await newOrder.setProducts(products, {through: { amount, price }}) // id de productos
    // OrderDetails.bulkCreate(products,{in})
    res.json({ msg: "Successful", newOrder });
  } catch (error) {
    next(error);
  }
};

module.exports = createOrder;
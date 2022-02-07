const { Order, Product, User } = require("../../../db");

const createOrder = async (req, res, next) => {
  try {
    const { date, address, idUser, products } = req.body;
    let newOrder

    if (idUser) {
      newOrder = await Order.create({
        date, adress: address,
      });
      await newOrder.setUser(idUser); // id del usuario que compra
      for (let i = 0; i < products.length; i++) {
        const { id, price, amount } = products[i];
        await newOrder.addDetails([id], { through: { amount, price } });
      }
      res.json({ msg: "Order created successfully" });
    } else {
      res.json({ msg: "Id is not recognized" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = createOrder;

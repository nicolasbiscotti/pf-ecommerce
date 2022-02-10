module.exports = {
  cleanOrder: (order) => {
    const { id, date, status, address, user, Products } = order;

    const orderDetails = Products.map((element) => {
      const { name, OrderDetail } = element;
      const { amount, price } = OrderDetail;
      return { name, amount, price };
    });

    return {
      id,
      date,
      status,
      address,
      user,
      details: orderDetails,
    };
  },
};

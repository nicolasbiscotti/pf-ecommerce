module.exports = {
  cleanUserOrder: (order) => {
    const { id, date, status, address, user, details } = order;

    const orderDetails = details.map((element) => {
      const { name, mainImg, id, OrderDetail } = element;
      const { amount, price } = OrderDetail;
      return { name, amount, price, mainImg, id };
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

module.exports = {
  cleanOrder: (order) => {
    const { id, date, status, adress, user, details } = order;

    const orderDetails = details.map((element) => {
      const { name, OrderDetail } = element;
      const { amount, price } = OrderDetail;
      return { name, amount, price };
    });

    return {
      id,
      date,
      status,
      adress,
      user,
      details: orderDetails,
    };
  },
};

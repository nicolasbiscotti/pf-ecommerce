module.exports = {
  cleanOrders: (rows) => {
    return rows.map((item) => {
      console.log(item.details, "->")
      const {
        name,
        OrderDetail,
      } = item.details;
      return {
        name,
        amount: OrderDetail.amount,
        price: OrderDetail.price,
      };
    });
  },
};

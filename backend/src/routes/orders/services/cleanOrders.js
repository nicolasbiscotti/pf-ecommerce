module.exports = {
  cleanOrders: (rows) => {
    return rows.map((item) => {
      const { id, date, status, address, user } = item;

      const detailsMaped = item.details.map((element) => {
        const { name, OrderDetail } = element;
        const { amount, price } = OrderDetail
        return { name, amount, price}
      });

      return {
        id, date, status, address, user,
        details: detailsMaped
      };
    });
  },
};

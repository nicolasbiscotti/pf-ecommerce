module.exports = {
  cleanUserOrders: (rows) => {
    return rows.map((item) => {
      const { id, date, status, address, user } = item;

      const detailsMaped = item.details.map((element) => {
        const { name, mainImg, id, OrderDetail } = element;
        const { amount, price } = OrderDetail
        return { name, amount, price, mainImg, id }
      });

      return {
        id, date, status, address, user,
        details: detailsMaped
      };
    });
  },
};
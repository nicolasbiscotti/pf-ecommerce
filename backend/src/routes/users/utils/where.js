module.exports = {
  where: ({ isActive }) => {
    if (isActive === false) {
      return { isActive: isActive };
    } else if (isActive === "all") {
      return {};
    } else {
      return { isActive: true };
    }
  },
};

module.exports = ({ name, min, max, Op }) => {
  if (name && !min && !max) {
    return {
      name: { [Op.iLike]: `%${name}%` },
      isActive: true,
    };
  } else if (name && min && max) {
    return {
      name: { [Op.iLike]: `%${name}%` },
      salePrice: { [Op.between]: [parseInt(min), parseInt(max)] },
      isActive: true,
    };
  } else if (min && max) {
    return {
      salePrice: { [Op.between]: [parseInt(min), parseInt(max)] },
      isActive: true,
    };
  } else {
    return { isActive: true };
  }
};

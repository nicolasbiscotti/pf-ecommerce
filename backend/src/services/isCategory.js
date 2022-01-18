module.exports = {
  isCategories: async function (model, arr) {
    let isExists = true;
    for (let i = 0; i < arr.length; i++) {
      const result = await model.findByPk(arr[i]);
      if (result === null) return (isExists = false);
    }
    return isExists;
  },
};

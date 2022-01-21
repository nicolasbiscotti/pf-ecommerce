const { URL_BASE_BACKEND } = require("../constants/urls");
const { suppliers } = require("../mockup/suppliers.json");
const { categories } = require("../mockup/categories.json");
const { products } = require("../mockup/products.json");
const { axiosPost } = require("./axios");

module.exports = {
  loadMockCategories: async function () {
    try {
      for (let i = 0; i < categories.length; i++) {
        const element = categories[i];
        await axiosPost(`${URL_BASE_BACKEND}/categories`, element);
      }
    } catch (error) {
      console.log(error);
    }
  },
  loadMockSuppliers: async function () {
    try {
      for (let i = 0; i < suppliers.length; i++) {
        const element = suppliers[i];
        await axiosPost(`${URL_BASE_BACKEND}/suppliers`, element);
      }
    } catch (error) {
      console.log(error);
    }
  },
  loadMockProducts: async function () {
    try {
      for (let i = 0; i < products.length; i++) {
        const element = products[i];
        await axiosPost(`${URL_BASE_BACKEND}/products`, element);
      }
    } catch (error) {
      console.log(error);
    }
  },
};

const { URL_BASE_BACKEND } = require("../constants/urls");
const { suppliers } = require("../mockup/suppliers.json");
const { categories } = require("../mockup/categories.json");
const { products } = require("../mockup/products.json");
const { users } = require("../mockup/users.json");
const { orders } = require("../mockup/orders.json");
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
  loadMockUsers: async function () {
    try {
      for (let i = 0; i < users.length; i++) {
        const element = users[i];
        await axiosPost(`${URL_BASE_BACKEND}/users`, element);
      }
    } catch (error) {
      console.log(error);
    }
  },
  loadMockOrders: async function () {
    try {
      for (let i = 0; i < orders.length; i++) {
        const element = orders[i];
        await axiosPost(`${URL_BASE_BACKEND}/orders`, element);
      }
    } catch (error) {
      console.log(error);
    }
  },
};

const axios = require("axios");

module.exports = {
  axiosGet: async function (url) {
    const result = await axios.get(url);
    return result.data;
  },
};

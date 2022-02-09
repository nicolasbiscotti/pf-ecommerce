const axios = require("axios");

const getUserGeoLocation = async (req, res, next) => {
  try {
    let data;
    await axios.get("https://ipapi.co/json/").then((response) => {
      data = {
        country_capital: response.data.country_capital,
        country_code: response.data.country_code,
      };
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getUserGeoLocation;

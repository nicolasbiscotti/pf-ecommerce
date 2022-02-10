const axios = require("axios");

const getUserGeoLocation = async (req, res, next) => {
  try {
    let data;
    await axios
      .get(`https://ipapi.co/${req.query.ip}/json/`)
      .then((response) => {
        data = {
          country_capital: response.data.country_capital,
          country_code: response.data.country_code,
          country_name: response.data.country_name,
        };
      });
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getUserGeoLocation;

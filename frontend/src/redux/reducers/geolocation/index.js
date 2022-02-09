import { GET_GEO_LOCATION } from "./const";

const initialState = {};

export const geolocation = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GEO_LOCATION:
      return {
        countryCapital: payload.country_capital,
        countryCode: payload.country_code,
      };
    default:
      return state;
  }
};

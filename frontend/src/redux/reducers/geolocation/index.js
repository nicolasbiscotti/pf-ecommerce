import { GET_GEO_LOCATION, SET_CAPITAL } from "./const";

const initialState = {};

export const geolocation = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GEO_LOCATION:
      return {
        countryCapital: payload.country_capital,
        countryCode: payload.country_code,
        countryName: payload.country_name,
      };
    case SET_CAPITAL:
      return { ...state, countryCapital: payload };
    default:
      return state;
  }
};

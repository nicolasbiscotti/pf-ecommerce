import axios from "axios";
import { GET_GEO_LOCATION, SET_CAPITAL } from "./const";

export function actionCreator(actionType, data) {
  return {
    type: actionType,
    payload: data,
  };
}

export const getGeoUser = function (payload) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/geolocation/user?ip=${payload}`);
      dispatch(actionCreator(GET_GEO_LOCATION, res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const setCapital = function (payload) {
  return async function (dispatch) {
    try {
      dispatch(actionCreator(SET_CAPITAL, payload));
    } catch (error) {
      console.log(error);
    }
  };
};

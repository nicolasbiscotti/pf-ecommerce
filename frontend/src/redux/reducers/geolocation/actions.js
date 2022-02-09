import axios from "axios";
import { GET_GEO_LOCATION } from "./const";

export function actionCreator(actionType, data) {
  return {
    type: actionType,
    payload: data,
  };
}

export const getGeoUser = function () {
  return async function (dispatch) {
    try {
      const res = await axios.get("/geolocation/user");
      dispatch(actionCreator(GET_GEO_LOCATION, res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

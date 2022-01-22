import { actionGenerator } from "../../../services/actionGenerator";
import { axiosGet } from "../../../services/axios";
import { SET_ALL_SUPPLIERS } from "./const";

export const getAllSuppliers = function () {
  return async function (dispatch) {
    try {
      const suppliers = await axiosGet("/suppliers");
      dispatch(actionGenerator(SET_ALL_SUPPLIERS, suppliers));
    } catch (error) {
      console.log(error);
    }
  };
};

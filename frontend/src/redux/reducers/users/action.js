import { actionGenerator } from "../../../services/actionGenerator";
import { corsAxiosGet, corsAxiosPut } from "../../../services/corsAxios";
import { SET_U_ALL_USERS, SET_U_DELETE_USERS, SET_U_TYPE } from "./const";

export const getUsers = () => {
  return async (dispatch) => {
    const users = await corsAxiosGet("/users");
    dispatch(actionGenerator(SET_U_ALL_USERS, users));
  };
};
export const updateTypeUser = ({ id, type }) => {
  return async (dispatch) => {
    const { message } = await corsAxiosPut("/users/update", { id, type });
    dispatch(actionGenerator(SET_U_TYPE, message));
    dispatch(getUsers());
  };
};
export const deleteUser = ({ id }) => {
  return async (dispatch) => {
    const { msg } = await corsAxiosPut(`/users/delete?id=${id}`);
    dispatch(actionGenerator(SET_U_DELETE_USERS, msg));
    dispatch(getUsers());
  };
};

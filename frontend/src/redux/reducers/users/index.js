import { SET_U_ALL_USERS, SET_U_TYPE } from "./const";

const initialState = {
  allUsers: [],
  resBackUpdateType: "",
};

export const users = (state = initialState, { type, payload }) => {
  const setState = (name) => {
    return { ...state, [name]: payload };
  };
  const cases = {
    [SET_U_ALL_USERS]: () => setState("allUsers"),
    [SET_U_TYPE]: () => setState("resBackUpdateType"),
  };
  return (cases[type] && cases[type]()) || state;
};

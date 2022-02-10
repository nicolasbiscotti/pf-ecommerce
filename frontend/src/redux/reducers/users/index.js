import { SET_U_ALL_USERS } from "./const";

const initialState = {
  allUsers: [],
};

export const users = (state = initialState, { type, payload }) => {
  const setState = (name) => {
    return { ...state, [name]: payload };
  };
  const cases = {
    [SET_U_ALL_USERS]: () => setState("allUsers"),
  };
  return (cases[type] && cases[type]()) || state;
};

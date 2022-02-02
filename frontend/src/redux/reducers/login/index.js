import { DELETE_MESSAGE, LOGIN, LOGOUT, SET_MESSAGE } from "./actions";

const initialState = {
  jwt: localStorage.getItem("jwt") || false,
  user: localStorage.getItem("user") || null,
  message: "",
};

export const login = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      localStorage.setItem("jwt", payload.jwt);
      localStorage.setItem("username", payload.username);
      return {
        ...state,
        jwt: payload.jwt,
        username: payload.username,
      };
    case LOGOUT:
      localStorage.setItem("jwt", null);
      localStorage.setItem("username", null);
      return {
        ...state,
        jwt: null,
        username: null,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: payload,
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        message: "",
      };
    default:
      return state;
  }
};

import {
  DELETE_MESSAGE,
  LOGIN,
  LOGOUT,
  SET_GITHUB_CODE,
  CLEAR_GITHUB_CODE,
  SET_MESSAGE,
} from "./actions";

const initialState = {
  jwt: localStorage.getItem("jwt") || false,
  username: localStorage.getItem("username") || null,
  message: "",
  gitHubCode: localStorage.getItem("gitHubCode") || null,
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
    case SET_GITHUB_CODE:
      localStorage.setItem("gitHubCode", payload);
      return {
        ...state,
        gitHubCode: payload,
      };
    case CLEAR_GITHUB_CODE:
      localStorage.setItem("gitHubCode", null);
      return {
        ...state,
        gitHubCode: null,
      };
    default:
      return state;
  }
};

import {
  LOGIN,
  LOGOUT,
  SET_GITHUB_CODE,
  CLEAR_GITHUB_CODE,
  SET_MESSAGE,
  DELETE_MESSAGE,
  SET_GOOGLE_DATA,
  CLEAR_GOOGLE_DATA,
} from "./actions";

const initialState = {
  jwt: localStorage.getItem("jwt") || false,
  username: localStorage.getItem("username") || null,
  message: "",
  gitHubCode: localStorage.getItem("gitHubCode") || null,
  googleData: localStorage.getItem("googleData") || null,
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
      localStorage.removeItem("jwt");
      localStorage.removeItem("username");
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
      localStorage.removeItem("gitHubCode");
      return {
        ...state,
        gitHubCode: null,
      };
      case SET_GOOGLE_DATA:
      localStorage.setItem("googleData", payload);
      return {
        ...state,
        googleData: payload,
      };
    case CLEAR_GOOGLE_DATA:
      localStorage.removeItem("googleData");
      return {
        ...state,
        googleData: null,
      };
    default:
      return state;
  }
};

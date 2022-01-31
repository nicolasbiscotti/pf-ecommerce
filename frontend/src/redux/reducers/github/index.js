import { LOGIN, LOGOUT } from "./actions";

const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const github = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      localStorage.setItem("isLoggedIn", JSON.stringify(payload.isLoggedIn));
      localStorage.setItem("user", JSON.stringify(payload.user));
      return {
        ...state,
        isLoggedIn: payload.isLoggedIn,
        user: payload.user,
      };
    case LOGOUT:
      localStorage.setItem("isLoggedIn", null);
      localStorage.setItem("user", null);
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

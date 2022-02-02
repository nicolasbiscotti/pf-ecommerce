export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_MESSAGE = "SET_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export function login(jwt, username) {
  username = username || null;
  return {
    type: LOGIN,
    payload: { jwt, username },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function setMessage(message) {
  return {
    type: SET_MESSAGE,
    payload: message,
  };
}

export function deleteMessage() {
  return {
    type: SET_MESSAGE,
  };
}

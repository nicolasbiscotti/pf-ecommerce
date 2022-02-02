export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_MESSAGE = "SET_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const SET_GITHUB_CODE = "SET_GITHUB_CODE";
export const CLEAR_GITHUB_CODE = "CLEAR_GITHUB_CODE";

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

export function setGitHubCode(code) {
  return {
    type: SET_GITHUB_CODE,
    payload: code,
  };
}
export function clearGitHubCode() {
  return {
    type: CLEAR_GITHUB_CODE,
  };
}

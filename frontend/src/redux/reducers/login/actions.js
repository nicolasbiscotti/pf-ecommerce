export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_MESSAGE = "SET_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const SET_GITHUB_CODE = "SET_GITHUB_CODE";
export const CLEAR_GITHUB_CODE = "CLEAR_GITHUB_CODE";
export const SET_GOOGLE_DATA = "SET_GOOGLE_DATA";
export const CLEAR_GOOGLE_DATA = "CLEAR_GOOGLE_DATA";

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

export function setGoogleData(googleData) {
  return {
    type: SET_GOOGLE_DATA,
    payload: googleData,
  };
}
export function clearGoogleData() {
  return {
    type: CLEAR_GOOGLE_DATA,
  };
}

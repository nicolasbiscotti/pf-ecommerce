import axios from "axios";
import { corsAxiosGet } from "../../../services/corsAxios";
import { deleteCart } from "../cart/actions";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_MESSAGE = "SET_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const SET_GITHUB_CODE = "SET_GITHUB_CODE";
export const CLEAR_GITHUB_CODE = "CLEAR_GITHUB_CODE";
export const SET_GOOGLE_DATA = "SET_GOOGLE_DATA";
export const CLEAR_GOOGLE_DATA = "CLEAR_GOOGLE_DATA";
export const SET_USERNAME = "SET_USERNAME";
export const SET_USERTYPE = "SET_USERTYPE";
const State = {
  COMPLETE: "COMPLETE",
  FINISH: "FINISH",
  FAILURE: "FAILURE",
};

export function fetchAuth({
  proxyURL,
  userData,
  authCode,
  authToken,
  onFinish,
  onComplete,
  onFailure,
  navigate,
}) {
  return async function (dispatch) {
    dispatch(deleteMessage());
    proxyURL = authCode ? `${proxyURL}?${authCode}` : proxyURL;
    userData = userData ? userData : {};
    const body = { ...userData, token: authToken };

    // Use code parameter and other parameters to make POST request to proxy_server
    try {
      const { data } = await axios.post(proxyURL, body);
      if (data.state === State.FINISH) {
        dispatch(login(data.jwt));
        dispatch(setMessage(data.message));
        navigate(onFinish);
      } else if (data.state === State.COMPLETE) {
        dispatch(setMessage(data.message));
        navigate(onComplete);
      } else {
        dispatch(setMessage(data.message));
        navigate(onFailure);
      }
    } catch (error) {
      dispatch(
        setMessage({
          text: "Somthing went wrong! Try again!!",
          type: "danger",
        })
      );
      navigate("/login");
    }
  };
}

export function fetchUser(navigate) {
  return async function (dispatch) {
    try {
      const data = await corsAxiosGet(`/users/login/whoami`);
      dispatch(setUsername(data.username));
      dispatch(setUserType(data.userType));
    } catch (error) {
      dispatch(logout());
      navigate("/login");
    }
  };
}

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    payload: username,
  };
}

export function setUserType(userType) {
  return {
    type: SET_USERTYPE,
    payload: userType,
  };
}

export function login(jwt, username, userType) {
  username = username || null;
  userType = userType || null;
  return {
    type: LOGIN,
    payload: { jwt, username, userType },
  };
}

export function completeLogout() {
  return async function (dispatch) {
    try {
      const data = await corsAxiosGet(`/users/login/logout`);
      if (data.logout) {
        dispatch(logout());
        dispatch(deleteCart());
        localStorage.clear();
      }
      dispatch(deleteMessage());
    } catch (error) {
      console.log(error);
    }
  };
}

export function logout() {
  return { type: LOGOUT };
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

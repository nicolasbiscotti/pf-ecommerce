export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function login(user, isLoggedIn) {
  return {
    type: LOGIN,
    payload: { user, isLoggedIn },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  }
}

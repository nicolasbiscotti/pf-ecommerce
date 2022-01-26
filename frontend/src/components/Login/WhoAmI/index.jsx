import axios from "axios";
import { useState } from "react";

const apiUrl = process.env.REACT_APP_BACKEND;

const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem("jwt");

    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default function WhoAmI() {
  const [user, setUser] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const getUser = async () => {
    try {
      const { data } = await instance.get(`${apiUrl}/users/login/whoami`);
      setUser(data);
      setFetchError(null);
    } catch (error) {
      setFetchError(error.message);
    }
  };

  const logout = async () => {
    try {
      const { data } = await instance.get(`${apiUrl}/users/login/logout`);
      if (data.logout) {
        localStorage.removeItem("jwt");
      }
      setUser({});
    } catch (error) {
      setFetchError(error.message);
    }
  };

  return (
    <div>
      <section>
        <button onClick={getUser}>Get User</button>
        <button onClick={logout}>Logout</button>
        <p>
          {user.username} - {user.email} -{" "}
          {localStorage.getItem("jwt") ? "logged" : "logged out"}
        </p>
        {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
      </section>
    </div>
  );
}

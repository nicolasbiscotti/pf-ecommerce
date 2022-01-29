import React, { useState, useEffect } from "react";
import { UserItemsStyled } from "./UserItemsStyled";
import Box from "./Box/Box";
import axios from "axios";
import { useSelector } from "react-redux";

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

export default function UserItems() {
  const [user, setUser] = useState({ username: "" });
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
      console.log(fetchError);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      getUser();
    }
  }, []);

  const cart = useSelector(state => state.cart);
  const [cartPrice,setCartPrice] = useState(cart.getSubtotalPrice());

  useEffect(()=>{
    setCartPrice(cart.getSubtotalPrice())
  },[cart])

  return (
    <UserItemsStyled>
      <Box
        logout={logout}
        Imgsrc="user"
        Imgalt="User image"
        Text={
          localStorage.getItem("jwt")
            ? [user.username, "Log out"]
            : ["Sign in", "Create an Account"]
        }
      />
      <Box Imgsrc="cart" Imgalt="Cart image" Text={["My Cart", `$${cartPrice}`]} />
    </UserItemsStyled>
  );
}

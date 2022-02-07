import React, { useState, useEffect } from "react";
import { UserItemsStyled } from "./UserItemsStyled";
import Box from "./Box/Box";
import { corsAxiosGet } from "../../../../services/corsAxios";
import {
  deleteMessage,
  logout,
} from "../../../../redux/reducers/login/actions";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../../../redux/reducers/cart/actions";
import { useNavigate } from "react-router-dom";

export default function UserItems() {
  const [user, setUser] = useState({ username: "" });
  const [fetchError, setFetchError] = useState(null);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const data = await corsAxiosGet(`/users/login/whoami`);
      setUser(data);
      setFetchError(null);
    } catch (error) {
      dispatch(logout());
      navigate("/login");
    }
  };

  const userLogout = async () => {
    try {
      const data = await corsAxiosGet(`/users/login/logout`);
      if (data.logout) {
        dispatch(logout());
        dispatch(deleteCart());
        localStorage.clear();
      }
      dispatch(deleteMessage());
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

  var cart = useSelector((state) => state.cart);

  return (
    <UserItemsStyled>
      <Box
        logout={userLogout}
        Imgsrc="user"
        Imgalt="User image"
        Text={
          isLoggedIn
            ? [user.username, "Log out"]
            : ["Sign in", "Create an Account"]
        }
      />
      <Box
        Imgsrc="cart"
        Imgalt="Cart image"
        Text={["My Cart", `$${cart.getSubtotalPrice()}`]}
      />
    </UserItemsStyled>
  );
}

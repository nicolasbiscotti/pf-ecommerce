import React, { useEffect } from "react";
import { UserItemsStyled } from "./UserItemsStyled";
import Box from "./Box/Box";
import { useState } from "react";
import { corsAxiosGet } from "../../../../services/corsAxios";
import { deleteMessage, logout } from "../../../../redux/reducers/login/actions";
import { useDispatch } from "react-redux";

export default function UserItems() {
  const [user, setUser] = useState({ username: "" });
  const [fetchError, setFetchError] = useState(null);

  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const data = await corsAxiosGet(`/users/login/whoami`);
      setUser(data);
      setFetchError(null);
    } catch (error) {
      setFetchError(error.message);
    }
  };

  const userLogout = async () => {
    try {
      const data = await corsAxiosGet(`/users/login/logout`);
      if (data.logout) {
        dispatch(logout());
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

  return (
    <UserItemsStyled>
      <Box
        logout={userLogout}
        Imgsrc="user"
        Imgalt="User image"
        Text={
          localStorage.getItem("jwt")
            ? [user.username, "Log out"]
            : ["Sign in", "Create an Account"]
        }
      />
      <Box Imgsrc="cart" Imgalt="Cart image" Text={["My Cart", "$0.00"]} />
    </UserItemsStyled>
  );
}

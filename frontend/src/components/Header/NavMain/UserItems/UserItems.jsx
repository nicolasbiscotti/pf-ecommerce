import React from "react";
import { UserItemsStyled } from "./UserItemsStyled";
import Box from "./Box/Box";

function UserItems() {
  return (
    <UserItemsStyled>
      <Box
        Imgsrc="user"
        Imgalt="User image"
        Text={["Sign in", "Create an Account"]}
      />
      <Box Imgsrc="cart" Imgalt="Cart image" Text={["My Cart", "$0.00"]} />
    </UserItemsStyled>
  );
}

export default UserItems;

import React from "react";
import { NavMainStyled } from "./NavMainStyled";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import UserItems from "./UserItems/UserItems.jsx";

function NavMain() {
  return (
    <NavMainStyled>
      <nav>
        <Logo to="/home" span="e-kommerce" />
        <Search />
        <UserItems />
      </nav>
    </NavMainStyled>
  );
}

export default NavMain;

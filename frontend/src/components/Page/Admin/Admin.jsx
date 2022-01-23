import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBarContent/SideBarContent";

import { AdminStyled } from "./style";

const Admin = () => {
  return (
    <AdminStyled>
      <SideBar />
      <Outlet />
    </AdminStyled>
  );
};

export default Admin;

import React from "react";
import { Outlet } from "react-router-dom";
import { AdminStyled } from "./style";

const Admin = () => {
  return (
    <AdminStyled>
      dashboard
      <Outlet />
    </AdminStyled>
  );
};

export default Admin;

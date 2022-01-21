import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import { AdminStyled } from "./style";

const Admin = () => {
  return (
    <AdminStyled>
      <Dashboard />
      <Outlet />
    </AdminStyled>
  );
};

export default Admin;

import React from "react";
import { Link } from "react-router-dom";
import { DashboardMobileStyled } from "./style";
import { GoThreeBars } from "react-icons/go";

const DashboardMobile = () => {
  return (
    <DashboardMobileStyled>
      <GoThreeBars color="white" />
      <nav>
        <Link to="create/product">Productos</Link>
        <Link to="">Facturas</Link>
        <Link to="">Usuarios</Link>
        <Link to="">Categorias</Link>
        <Link to="">Proveedores</Link>
      </nav>
    </DashboardMobileStyled>
  );
};

export default DashboardMobile;

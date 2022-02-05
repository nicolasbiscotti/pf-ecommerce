import React from "react";
import { Link } from "react-router-dom";
import { SideBarMobileStyled } from "./style";
import { GoThreeBars } from "react-icons/go";

const SideBarMobile = () => {
  return (
    <SideBarMobileStyled>
      <GoThreeBars color="white" />
      <nav>
        <Link to="create/product">Productos</Link>
        <Link to="">Facturas</Link>
        <Link to="">Usuarios</Link>
        <Link to="">Categorias</Link>
        <Link to="">Proveedores</Link>
      </nav>
    </SideBarMobileStyled>
  );
};

export default SideBarMobile;

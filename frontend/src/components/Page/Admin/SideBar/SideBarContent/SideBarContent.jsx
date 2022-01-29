import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { SideBarContentStyled } from "./style";

const SideBarContent = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <SideBarContentStyled>
      <GoThreeBars
        color="white"
        className={
          "bar className='hvr-bounce-to-right' " +
          (active === true ? "active" : "")
        }
        onClick={handleClick}
      />
      <nav className={active === true ? "active" : ""}>
        <div className="topSidebar">
          <FaUserCircle className="user" />
          <p>Admin</p>
        </div>
        <div className="containerLinks">
          <Link className="hvr-bounce-to-right" to="create/product">
            Productos
          </Link>
          <Link className="hvr-bounce-to-right" to="">
            Facturas
          </Link>
          <Link className="hvr-bounce-to-right" to="">
            Usuarios
          </Link>
          <Link className="hvr-bounce-to-right" to="create/category">
            Categorias
          </Link>
          <Link className="hvr-bounce-to-right" to="">
            Proveedores
          </Link>
        </div>
        <div className="signOut">
          <Link className="hvr-bounce-to-right" to="/">
            Cerrar Sesion
          </Link>
        </div>
      </nav>
    </SideBarContentStyled>
  );
};

export default SideBarContent;

import React from "react";
import { NavTopStyled } from "./NavTopStyled";
import { Link } from "react-router-dom";
import { Button } from "../../common/button/Button";
import RequireAuth from "../../../AuthProvider/RequireAuth";

function NavTop() {
  return (
    <NavTopStyled>
      <RequireAuth isAdmin={true}>
        <span>
          <Button>
            <Link to="/admin">Admin</Link>
          </Button>
        </span>
      </RequireAuth>
    </NavTopStyled>
  );
}

export default NavTop;

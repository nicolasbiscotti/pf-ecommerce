import React from "react";
import { NavTopStyled } from "./NavTopStyled";
import { Link } from "react-router-dom";
import { Button } from "../../common/button/Button";

function NavTop() {
  return (
    <NavTopStyled>
      <span>
        <Button>
          <Link to="/admin">Admin</Link>
        </Button>
      </span>
    </NavTopStyled>
  );
}

export default NavTop;

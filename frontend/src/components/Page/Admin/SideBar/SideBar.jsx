import React from "react";
import SideBarMobile from "./SideBarMobile/SideBarMobile";
import { SideBarStyled } from "./style";

const SideBar = () => {
  return (
    <SideBarStyled>
      <SideBarMobile />
    </SideBarStyled>
  );
};

export default SideBar;

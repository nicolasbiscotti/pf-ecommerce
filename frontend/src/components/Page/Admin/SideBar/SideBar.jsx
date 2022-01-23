import React from "react";
import SideBarContent from "./SideBarContent/SideBarContent";
import { SideBarStyled } from "./style";

const ContainerSideBar = () => {
  return (
    <SideBarStyled>
      <SideBarContent />
    </SideBarStyled>
  );
};

export default ContainerSideBar;

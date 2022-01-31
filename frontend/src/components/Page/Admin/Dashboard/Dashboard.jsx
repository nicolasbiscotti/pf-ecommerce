import React from "react";
import { DashboardStyled } from "./style";
import DashboardMobile from "./DashboardMobile/DashboardMobile";

const Dashboard = () => {
  return (
    <DashboardStyled>
      <DashboardMobile />
    </DashboardStyled>
  );
};

export default Dashboard;

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const EmptycartStyled = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10rem;
`;

export const NavlinkShop = styled(NavLink)`
  color: black;
  font-size: 2.5rem;
  &:visited {
    color: black;
  }
  span {
    padding-left: 2rem;
  }
`;

export default EmptycartStyled;

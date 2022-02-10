import { NavLink } from "react-router-dom";
import styled from "styled-components";

const EmptycartStyled = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 15rem;
    margin-left: -3rem;
  }
  h1 {
    padding: 0 4rem;
    text-align: center;
  }
`;

export const NavlinkShop = styled(NavLink)`
  color: black;
  font-size: 2.5rem;
  margin: ${({ margin }) => margin || "0"};
  &:visited {
    color: black;
  }
  span {
    padding-left: 2rem;
  }
  p {
    color: rgba(0, 0, 0, 0.6);
    padding: 0 4rem;
    text-align: center;
  }
`;

export default EmptycartStyled;

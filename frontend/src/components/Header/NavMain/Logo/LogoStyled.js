import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LogoStyled = styled(NavLink)`
  color: white;
  font-size: 4.2rem;
  font-weight: 300;
  letter-spacing: 0rem;
  &:visited {
    color: white;
  }
  @media screen and (min-width: 0px) and (max-width: 610px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 0px) and (max-width: 480px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 0px) and (max-width: 350px) {
    font-size: 2.2rem;
  }
`;

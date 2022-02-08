import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavlinkHome = styled(NavLink)`
  color: white;
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 0rem;
  display: flex;
  align-items: center;
  &:visited {
    color: white;
  }
`;

export const SuccessStyled = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  h1 {
    margin-top: 0.7rem;
    margin-bottom: 8rem;
  }
  * p,
  p {
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
  }
`;

import styled from "styled-components";
import { borderscolor } from "../../../utilsStyles/utilsColors";
import { flexSpacebetweenCenter } from "../../../utilsStyles/utilsMixins";

export const NavMainStyled = styled.div`
  width: 100%;
  height: 18vh;
  border-top: 1px solid ${borderscolor};
  ${flexSpacebetweenCenter};
  position: relative;
  nav {
    width: 98%;
    height: 100%;
    margin: 1rem 1.2rem;
    ${flexSpacebetweenCenter};
    border-bottom: 1px solid ${borderscolor};
  }
  @media screen and (min-width: 550px) and (max-width: 992px) {
    height: 15vh;
    nav {
      margin-bottom: 0.5rem;
      display: grid;
      grid-template-columns: 3fr 1fr 3fr;
      grid-template-rows: 1fr 1fr;
      align-items: center;
      a {
        grid-column: span 1;
        text-align: center;
      }
      > :nth-child(2) {
        grid-column: span 3;
        display: flex;
        justify-content: center;
        align-items: center;
        input {
          width: 90%;
        }
      }
      > :nth-child(3) {
        grid-row: 1;
        grid-column: 3;
        justify-self: center;
      }
      * p {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 0px) and (max-width: 550px) {
    height: 15vh;
    nav {
      margin-bottom: 0.5rem;
      display: grid;
      grid-template-columns: 3fr 1fr 3fr;
      grid-template-rows: 1fr 1fr;
      align-items: center;
      a {
        grid-column: span 1;
        text-align: center;
      }
      > :nth-child(2) {
        grid-column: span 3;
        display: flex;
        justify-content: center;
        align-items: center;
        input {
          width: 90%;
        }
      }
      * p {
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 0px) and (max-width: 380px) {
    nav {
      display: grid;
      grid-template-columns: 8fr 1fr 8fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`;

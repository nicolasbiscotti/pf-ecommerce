import styled from "styled-components";

export const UserItemsStyled = styled.div`
  width: 25vw;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  @media screen and (min-width: 550px) and (max-width: 992px) {
    width: 35vw;
    text-align: center;
    p {
      white-space: nowrap;
      margin: 0.2rem 1rem 0.2rem -0.4rem;
    }
  }

  @media screen and (min-width: 550px) and (max-width: 680px) { 
    img {
        width: 4.2rem;
        height: 4.2rem;
      }
      > :nth-child(3) p {
        display: none;
      }
    }
  @media screen and (min-width: 0px) and (max-width: 550px) {
      grid-row: 1;
      grid-column: 3;
      width: 100%;
      justify-content: space-around;
      justify-self: center;
      * p {
        font-size: 1.5rem;
      }
      img {
        width: 4.2rem;
        height: 4.2rem;
        margin: 0;
      }
      > :nth-child(3) p, > :nth-child(2) {
        display: none;
      }
    }
  }
  @media screen and (min-width: 0px) and (max-width: 380px) { 
    justify-content: space-around;
`;

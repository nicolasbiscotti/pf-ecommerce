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
`;

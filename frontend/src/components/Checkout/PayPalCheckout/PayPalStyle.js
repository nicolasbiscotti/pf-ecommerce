import styled from "styled-components";

export const PayPalStyle = styled.div`
  width: calc(100%- 8rem);
  min-height: 40vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 2rem 2rem 0rem;
  padding-top: 3rem;
  p {
    text-align: center;
    font-size: 3rem;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 4rem;
  }
  div #smart-menu {
    z-index: 1;
  }
`;

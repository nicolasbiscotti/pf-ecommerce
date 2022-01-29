import styled from "styled-components";

export const MercadopagoStyled = styled.div`
  position: relative;
  width: 40vw;
  height: 10vh;
  .button-checkout button {
    width: 40vw;
    height: 8vh;
    &:hover {
      background-color: #158dcf;
    }
  }
  * > img {
    position: absolute;
    top: 0;
    left: calc(50% - 8rem);
    width: 16rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

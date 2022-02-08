import styled from "styled-components";

export const WelcomeDivStyled = styled.div`
  height: 10vh;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  * {
    display: block;
    text-align: center;
    color: black;
  }
  .text {
    height: 100%;
    div {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p:first-child {
        font-size: 3rem;
      }
      p:nth-child(2) {
        color: grey;
        line-height: 2rem;
      }
    }
  }
  svg {
    width: 40%;
    height: 100%;
  }
  @media screen and (min-width: 0px) and (max-width: 420px) {
    svg {
      width: 20%;
    }
    .text {
      div {
        p:first-child {
          font-size: 2.4rem;
        }
        p:nth-child(2) {
          font-size: 1.6rem;
        }
      }
    }
  }
`;

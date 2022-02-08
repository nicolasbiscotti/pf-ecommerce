import styled from "styled-components";

export const Step2Styled = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(7, 1fr);
  justify-items: center;
  gap: 2rem;
  .card {
    width: 100%;
    grid-column: span 2;
    grid-row: span 2;
    padding: 2rem;
    display: flex;
    font-family: monospace;
    flex-wrap: wrap;
    div {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      flex-wrap: wrap;
      word-break: break-word;
      div {
        width: 100%;
        font-weight: 600;
        font-size: 2rem;
      }
    }
  }
  button {
    width: 50%;
    min-width: 10rem;
    background-color: #123456;
  }
  @media screen and (min-width: 0px) and (max-width: 1280px) {
    .card {
      padding: 0;
      .row-2 {
        padding-left: 1rem;
      }
    }
  }
  @media screen and (min-width: 0px) and (max-width: 550px) {
    .card div {
      width: 100%;
      div {
        line-height: 3rem;
        margin: 0.5rem 0;
      }
    }
    .card .row-2 {
      padding: 0;
    }
  }
`;

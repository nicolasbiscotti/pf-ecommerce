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
      word-break: break-all;
      div {
        width: 100%;
      }
    }
  }
  button {
    grid-column: span 2;
    width: 50%;
  }
`;

import styled from "styled-components";

export const ShowProductStyled = styled.section`
  color: white;
  table {
    td,
    th {
      padding: 10px;
    }
    tr {
      border: 1px solid blue;
    }
  }
  @media (min-width: 768px) {
    margin-left: 250px;
  }
`;

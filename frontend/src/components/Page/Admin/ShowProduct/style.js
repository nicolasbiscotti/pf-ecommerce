import styled from "styled-components";
import { bgButtonAdmin } from "../../../../utilsStyles/utilsColors";

export const ShowProductStyled = styled.section`
  color: white;
  display: grid;
  justify-items: center;
  table {
    tbody {
      tr {
        background-color: ${bgButtonAdmin};
      }
    }
  }
  @media (min-width: 768px) {
    margin-left: 250px;
  }
  @media (min-width: 1024px) {
    th,
    td {
      padding: 15px;
    }
  }
`;

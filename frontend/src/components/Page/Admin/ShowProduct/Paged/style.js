import styled from "styled-components";
import {
  bgButtonAdmin,
  bgFormAdmin,
} from "../../../../../utilsStyles/utilsColors";

export const PagedStyled = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
    li {
      display: grid;
      align-items: center;
      a {
        display: grid;
        align-items: center;
        padding: 8px 13px;
        border-radius: 50%;
        line-height: 2rem;
        background-color: ${bgFormAdmin};
        &:hover {
          background-color: ${bgButtonAdmin};
        }
        .orderClients {
        background-color: red;
        }
      }
    }
  }
  .active {
    background-color: ${bgButtonAdmin};
  }
  .previous {
    a {
      padding: 8px 8px;
      border-radius: 50%;
    }
  }
  .next {
    a {
      padding: 8px 8px;
      border-radius: 50%;
    }
  }
`;

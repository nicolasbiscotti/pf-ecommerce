import styled from "styled-components";
import { mainBgcolor } from "../utils/utilsColors";
import { flexColumnBody } from "../utils/utilsMixins";
export const StyledLoginPage = styled.div`
  ${flexColumnBody};
  header {
    background-color: ${mainBgcolor};
  }
  main {
    overflow: auto;
    padding-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    .message {
      max-width: 32.5rem;
      padding: 0.8rem;
      margin: 1rem auto 0;
      border-radius: 5px;
      text-align: center;
    }
    .danger {
      background: rgba(255, 3, 3, 0.8);
      color: whitesmoke;
    }
    .success {
      background: rgba(31, 127, 46, 0.8);
      color: whitesmoke;
    }
  }
`;

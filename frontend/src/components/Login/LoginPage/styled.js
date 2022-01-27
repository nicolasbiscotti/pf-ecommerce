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
  }
`;

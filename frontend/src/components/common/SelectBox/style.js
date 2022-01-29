import styled from "styled-components";
import { labelFileStyle } from "../../../utilsStyles/mixInputFile";
import { errSpan } from "../../../utilsStyles/mixSpan";
import { blackLight } from "../../../utilsStyles/utilsColors";

export const SelectBoxStyled = styled.section`
  .collapse {
    ${labelFileStyle}
    span {
      ${errSpan};
    }
  }
  .checks {
    display: grid;
    gap: 5px;
    position: absolute;
    background-color: ${blackLight};
    z-index: 100;
    padding: 15px;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

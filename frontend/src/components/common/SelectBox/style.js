import styled from "styled-components";
import { labelFileStyle } from "../../../utilsStyles/mixInputFile";
import { errSpan } from "../../../utilsStyles/mixSpan";
import { blackLight } from "../../../utilsStyles/utilsColors";

export const SelectBoxStyled = styled.section`
  position: relative;
  .collapse {
    ${labelFileStyle}
    span {
      ${errSpan};
    }
  }
  .checks {
    position: absolute;
    left: 0;
    bottom: 40px;
    background-color: ${blackLight};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    z-index: 100;
    padding: 5px;
    width: 100%;
    @media (min-width: 375px) {
      width: 200%;
    }
  }
`;

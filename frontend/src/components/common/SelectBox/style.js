import styled from "styled-components";
import { blackLight } from "../../../utilsStyles/utilsColors";

export const SelectBoxStyled = styled.section`
  position: relative;
  .checks {
    position: absolute;
    left: 0;
    bottom: 40px;
    background-color: ${blackLight};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    z-index: 100;
    width: 100%;
    padding: 5px;
  }
`;

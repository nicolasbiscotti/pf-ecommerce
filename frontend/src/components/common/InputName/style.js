import styled from "styled-components";
import { blackLight, redHard } from "../../../utilsStyles/utilsColors";

export const InputNameStyled = styled.div`
  input {
    color: white;
    width: 100%;
    background-color: ${blackLight};
    border: none;
    padding: 10px;
    outline: none;
    &:focus {
      background-color: gray;
    }
  }
  label {
    margin-bottom: 10px;
    display: block;
  }
  span {
    color: ${redHard};
  }
`;

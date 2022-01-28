import styled from "styled-components";
import { blackLight, redHard } from "../../../utilsStyles/utilsColors";

export const InputNumberSyled = styled.div`
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
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  label {
    display: block;
    margin-bottom: 10px;
  }
  span {
    color: ${redHard};
  }
`;

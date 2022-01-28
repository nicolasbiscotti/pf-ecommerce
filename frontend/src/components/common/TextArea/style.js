import styled from "styled-components";
import { blackLight, redHard } from "../../../utilsStyles/utilsColors";

export const TextAreaStyled = styled.div`
  textarea {
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
    display: block;
    margin-bottom: 10px;
  }
  span {
    color: ${redHard};
  }
`;

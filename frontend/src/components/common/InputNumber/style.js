import styled from "styled-components";
import {
  basicInputStyle,
  removeBtnInputNumber,
} from "../../../utilsStyles/mixInputs";
import { basicLabelStyle } from "../../../utilsStyles/mixLabel";
import { errSpan } from "../../../utilsStyles/mixSpan";

export const InputNumberSyled = styled.div`
  label {
    ${basicLabelStyle}
  }
  input {
    ${basicInputStyle}
  }
  ${removeBtnInputNumber}
  span {
    ${errSpan}
  }
`;

import styled from "styled-components";
import { basicInputStyle } from "../../../utilsStyles/mixInputs";
import { basicLabelStyle } from "../../../utilsStyles/mixLabel";
import { errSpan } from "../../../utilsStyles/mixSpan";

export const InputNameStyled = styled.div`
  label {
    ${basicLabelStyle}
  }
  input {
    ${basicInputStyle}
  }
  span {
    ${errSpan}
  }
`;

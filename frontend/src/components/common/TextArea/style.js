import styled from "styled-components";
import { basicInputStyle } from "../../../utilsStyles/mixInputs";
import { basicLabelStyle } from "../../../utilsStyles/mixLabel";
import { errSpan } from "../../../utilsStyles/mixSpan";

export const TextAreaStyled = styled.div`
  textarea {
    ${basicInputStyle}
  }
  label {
    ${basicLabelStyle}
  }
  span {
    ${errSpan}
  }
`;

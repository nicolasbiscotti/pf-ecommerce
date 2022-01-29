import styled from "styled-components";
import { errSpan } from "../../../utilsStyles/mixSpan";

export const EdarButton = styled.button`
  background-color: #e8474c;
  border: none;
  color: inherit;
  font-weight: 900;
  font-size: 15px;
  width: 150px;
  padding-top: 8px;
  padding-bottom: 8px;
  span {
    ${errSpan}
  }
`;

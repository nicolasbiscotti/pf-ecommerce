import styled from "styled-components";

export const InputFileStyled = styled.div`
  position: relative;
  label {
    display: inline-block;
    background-color: #e8474c;
    border: none;
    color: inherit;
    font-weight: bold;
    width: 150px;
    text-align: center;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  input {
    opacity: 0;
    width: 150px;
    position: absolute;
    left: 0;
  }
`;

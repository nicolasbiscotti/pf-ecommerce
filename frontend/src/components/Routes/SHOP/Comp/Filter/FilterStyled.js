import styled from "styled-components";

export const FilterStyled = styled.div`
  background-color: #fff;
  border-radius: 4px;
  border: solid #fff 15px;
  font-family: "Rubik", sans-serif;
  align-content: center;
  color: #666;
  width: 100%;

  h1 {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border-bottom: solid #0dcaf0 2px;
    color: #222;
  }

  h3,
  span {
    padding-left: 3%;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }

  input {
    width: 28%;
  }

  #button {
    box-sizing: border-box;
    background-color: #16bcdc;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-family: sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 5px;
    text-transform: uppercase;
    width: max-content;
    cursor: pointer;
    transition: all 0.3s ease;
    line-height: 1;
    padding: 1rem;
    margin: 10px;
  }

  #button:hover {
    background-color: #0dcaf0;
  }

  #button:active {
    transform: scale(0.9);
  }
`;

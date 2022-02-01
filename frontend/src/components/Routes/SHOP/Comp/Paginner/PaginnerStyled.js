import styled from "styled-components";

export const PaginnerStyled = styled.div`
  width: calc(100% - 2rem);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Rubik", sans-serif;
  padding: 1.2rem;
  font-size: 1.2rem;
  border-radius: 4px;
  margin: 1rem;

  span {
    font-size: 1.6rem;
    user-select: none;
  }
  .arrow {
    cursor: pointer;
    font-size: 2rem;
    color: #16bcdc;
  }

  .arrow:active {
    transform: scale(0.8);
  }

  @media screen and (min-width: 550px) {
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

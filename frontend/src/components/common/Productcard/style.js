import styled from "styled-components";

export const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fefefe;
  margin-bottom: 1.5rem;
  align-items: center;
  padding: 1rem;
  min-width: 130px;
  min-height: 280px;
  text-align: center;
  width: 48%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  img {
    object-fit: contain;
    height: 182px;
  }
  section {
    margin-top: 1.2rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  h4 {
    background-color: #f7f7f7;
    margin: 0;
    font-family: "Rubik", sans-serif;
    font-size: 1.3rem;
    color: #222;
    &:hover {
      color: #16bcdc;
    }
  }
  h5 {
    font-family: "Rubik", sans-serif;
    margin: 0.3rem;
    font-size: 1.5rem;
    color: #16bcdc;
  }

  @media screen and (min-width: 550px) {
    max-width: 250px;
  }

  @media screen and (min-width: 992px) {
    max-width: 250px;
  }
`;

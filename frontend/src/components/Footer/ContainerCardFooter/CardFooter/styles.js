import styled from "styled-components";

export const CardFoot = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap");
  background-color: #292b2f;
  color: #fff;
  width: 40%;
  padding: 10px;
  min-height: 130px;
  max-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0.5rem;
  font-family: "Rubik", sans-serif;
  font-size: 1.2rem;
  text-align: center;
  h4 {
    margin: 0.5rem;
  }

  @media screen and (min-width: 550px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    min-height: 90px;
    font-weight: lighter;
    font-size: 1.1rem;
  }

  @media screen and (min-width: 992px) {
    background-color: #1f2024;
    width: 23%;
    font-weight: lighter;
  }
`;

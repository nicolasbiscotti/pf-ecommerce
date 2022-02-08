import styled from "styled-components";

export const AsideStyled = styled.aside`

  width: 35%;
  height: 100%;
  min-height: calc(100vh - 6rem);
  background: #f5f5f5;
  * {
    display: block;
    text-align: center;
    font-weight: 400;
    color: #2b2929;
  }
  div .card-container {
    padding: 4rem 18%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      margin-bottom: 2.5rem;
    }
    h5 {
      color: #434343;
      margin: 0.9rem;
    }
    img {
      width: 25%;
      clip-path: circle();
      margin-bottom: 1rem;
    }
  }
  div .amount-container {
    margin: 0 12%;
    padding: 2rem 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #d7d7d7;
    border-bottom: 1px solid #d7d7d7;
    span {
      font-size: 1.8rem;
      color: #3e3e3e;
    }
  }
  .amount-container {
    margin: 0 12%;
    padding: 2rem 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #d7d7d7;
    border-bottom: 1px solid #d7d7d7;
    span {
      font-size: 1.8rem;
      color: #3e3e3e;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 3rem 0;
    width: 100%;
    height: 100%;
    .card-container {
      padding: 4rem 5%;

    }
    .amount-container {
      margin: 0 5%;
      padding: 2rem 0.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #d7d7d7;
      border-bottom: 1px solid #d7d7d7;
      
  }

`;

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
  .total-container {
    margin-top: 0.5rem;
    border-top: none;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 780px) and (max-width: 992px) {
    div .card-container {
      padding: 4rem 2rem;
    }
  }
  @media screen and (min-width: 0px) and (max-width: 780px) {
    width: 100%;
    display: flex;
    overflow-x: scroll;
    min-height: 30vh;
    align-items: flex-start;
    div .card-container {
      width: 240px;
      padding: 1rem;
      margin: 0 2rem;
      border-left: 1px solid #d7d7d7;
      border-right: 1px solid #d7d7d7;
    }
    .item-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      min-height: 40vh;
    }
    div .amount-container {
      width: 240px;
      margin: 0 2rem;
      padding: 2rem 0.2rem;
      align-self: flex-end;
    }
    .total-container {
      height: 40vh;
      display: flex;
      flex-direction: column;
      margin: 0 1rem;
      padding-top: 20%;
      background-color: #e3e3e3;
      span {
        width: 240px;
      }
    }
  }
`;

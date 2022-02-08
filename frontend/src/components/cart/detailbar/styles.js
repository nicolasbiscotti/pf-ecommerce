import styled from "styled-components";

export const DetailbarStyled = styled.div`
  width: 25%;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  padding: 2rem;
  ul {
    margin-top: 20px;
  }

  li {
    display: flex;
    justify-content: space-between;

    .price {
      margin-right: 10px;
    }

    .item {
      margin-left: 10px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 30%;
  }
`;

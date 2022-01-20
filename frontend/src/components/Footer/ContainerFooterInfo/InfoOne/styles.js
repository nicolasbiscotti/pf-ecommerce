import styled from "styled-components";

export const InfoOneStyled = styled.div`
  width: 100%;
  color: #fff;
  font-family: "Rubik", sans-serif;
  padding: 2rem;

  h3 {
    margin: 0.5rem;
    font-size: 3rem;
    font-weight: 400;
  }
  p {
    font-size: 1.4rem;
    margin: 1rem 0.5rem;
    color: #6c757d;
  }
  li {
    font-size: 1.4rem;
    margin: 0.5rem;
    color: #afb4b9;
  }

  .contactIcon {
    color: #16bcdc;
    margin-right: 0.4rem;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 6rem;
    h3 {
      font-size: 4rem;
      letter-spacing: -3px;
    }
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 6rem;
    width: 50%;
  }
`;

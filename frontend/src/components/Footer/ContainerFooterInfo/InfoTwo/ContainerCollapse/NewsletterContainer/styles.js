import styled from "styled-components";

export const NewsletterContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: "Rubik", sans-serif;
  font-size: 1.5rem;
  font-weight: lighter;

  p {
    margin: 0.7rem 0;
    font-size: 1.4rem;
  }

  .containerCheck {
    margin: 0.5rem;
    display: flex;
    align-items: center;
    p {
      padding: 0 0.5rem;
      line-height: 1.5;
    }
  }
`;

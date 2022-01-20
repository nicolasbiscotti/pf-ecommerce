import styled from "styled-components";

export const ItemCollapseStyled = styled.div`
  color: #fff;
  font-family: "Rubik", sans-serif;
  font-size: 1.5rem;
  font-weight: lighter;
  width: 100%;
  h3 {
    margin-bottom: 1.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  ul {
    display: block;
    opacity: 0;
    overflow: hidden;
    height: 0;
    transition: all 600ms ease-in-out;
  }

  .show {
    opacity: 1;
    height: 140px;
  }

  @media screen and (min-width: 992px) {
    ul {
      opacity: 1;
      height: 140px;
    }
    svg {
      display: none;
    }
  }
`;

import styled from "styled-components";
export const StyledHero = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  gap: 15px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
  }

  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }
  @-webkit-keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }

  @keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }
`
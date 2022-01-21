import styled from "styled-components";

export const FilterbarStyled=styled.div`
    width: 28%;

    @media screen and (min-width: 550px) and (max-width: 768px){
        width: 15%
    }

    @media screen and (min-width: 0px) and (max-width: 550px){
        display:none;
    }
`;

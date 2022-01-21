import styled from "styled-components";

export const CategoriesStyled=styled.div`
    background-color: #fff;
    border-radius: 3px;
    margin-top: 10px;
    margin-left: 10px;
    border-bottom: solid #fff 10px;
    font-family: "Rubik",sans-serif;

    h1,h3{
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }

    h1{
        padding: 3%;
        padding-top: 4%;
        border-bottom: solid #0dcaf0 2px;
        color: #222;
    }

    h3{
        padding-left: 3%;
        color: #666;
        border-bottom: solid #F3FCFC  1px;
    }

    @media screen and (min-width: 550) and (max-width: 768) {
        h1{
            width: 80%;
            font-size: 20%;
        }
    }
`;
import styled from "styled-components";

export const Cardstyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    align-items: center;
    padding: 1rem;
    min-width: 130px;
    min-height: 280px;
    text-align: center;
    width: 35%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #fefefe;

    img {
        box-sizing: border-box;
        width: 100%;
        object-fit: contain;
        height: 182px;
    }

    .name{
        margin: 0;
        font-family: "Rubik", sans-serif;
        font-size: 1.3rem;
        color: #222;
        &:hover {
            color: #16bcdc;
        }
    }

    .close{
        display: flex;
        justify-content: flex-end;
        align-content: flex-end;
        width: 100%;
    }
`;
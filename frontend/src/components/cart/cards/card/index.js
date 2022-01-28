import React from "react";
import { CardsStyled } from "../cardstyled";

const Card = function({idProduct,price,count}){
    return (
        <CardsStyled>
            {idProduct}
            Price: {price}
            Count: {count}
        </CardsStyled>
    )
}

export default Card;
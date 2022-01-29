import React from "react";
import { Cardstyled } from "./styles";

const Card = function({name,img,price,count}){
    return (
        <Cardstyled>
            <img src={img} alt="product-img" />
            <h2 className="name">{name}</h2>
            <span>${price} x {count}</span>
        </Cardstyled>
    )
}

export default Card;
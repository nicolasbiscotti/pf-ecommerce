import React from "react";
import { useSelector } from "react-redux";
import { DescriptionerStyled } from "../styles";

export default function Descriptioner(){
    var category=useSelector((state)=>state.products.category)

    return (
        <DescriptionerStyled>
            <img src='https://rubiktheme.com/demo/emarket_demo/c/4-category_default/computer-accessories.jpg'/>
            <h1>{category.name}</h1>
            <p>A continuación visualizará todos los productos disponibles</p>
        </DescriptionerStyled>
    )
}
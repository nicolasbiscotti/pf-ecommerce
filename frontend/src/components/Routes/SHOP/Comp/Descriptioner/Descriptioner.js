import React from "react";
import { useSelector } from "react-redux";
import { DescriptionerStyled } from "./DescriptionerStyled";

export default function Descriptioner(){
    const category=useSelector((state)=>state.filters.isDefaults?null:state.filters.category);
    
    return (
        <DescriptionerStyled>
            <img src='https://rubiktheme.com/demo/emarket_demo/c/4-category_default/computer-accessories.jpg' alt='img-category'/>
            <h1>{category?category.name:'ALL PRODUCTS'}</h1>
            <p>A continuación visualizará todos los productos disponibles en esta categoría.</p>
        </DescriptionerStyled>
    )
}
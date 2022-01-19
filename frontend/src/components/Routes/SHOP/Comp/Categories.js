import React from "react";
import { useSelector } from "react-redux";
import { CategoriesStyled } from "../styles";

export default function Categories(){
    const categories=useSelector((state)=>state.products.categories);
    console.log(categories)
    return (
        <CategoriesStyled>
            <h1>Categories</h1>
            <h3>All products</h3>
            {categories.map((c,i)=><h3 key={i}>{c.name}</h3>)}
        </CategoriesStyled>
    )
}
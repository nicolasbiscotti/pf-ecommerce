import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesStyled } from "../styles";
import { selectCategory } from "../../../../redux/reducers/filters/actions";

export default function Categories(){
    const categories=useSelector((state)=>state.products.categories);
    const dispatch=useDispatch()
    
    function clicCategory(e){
        const id=e.target.id;
        if(id==-1){
            console.log('aun no')
        }else{
            dispatch(selectCategory(categories[id]))
        }
    }

    return (
        <CategoriesStyled>
            <h1>Categories</h1>
            <h3 onClick={clicCategory} id={-1}>All products</h3>
            {categories.map((c,i)=><h3 key={i} onClick={clicCategory} id={i}>{c.name}</h3>)}
        </CategoriesStyled>
    )
}